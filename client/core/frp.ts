import {writeFileSync, ensureFileSync} from "fs-extra";
import * as path from "path";
import config from "../config";
import {spawn} from "child_process";
import socketClient from "./socket.io";

export function getProfileFilePath(name: string) {
    return path.resolve(config.frpc_ini_folder_path, `${name}.ini`);
}

export function createTunnel(name: string, text: string) {
    const filePath = getProfileFilePath(name);

    ensureFileSync(filePath);
    writeFileSync(filePath, text);
}

function writeLog(name: string, content: string) {
    socketClient.emit("tunnel-log", {
        name,
        content
    });
}

export function runTunnel(name: string) {
    const filePath = getProfileFilePath(name);

    const workerProcess = spawn(config.frpc_exe_path, ["-c", filePath], {detached: true});

    workerProcess.stdout.on('data', function (data) {
        writeLog(name, data.toString().replace("\n",""));
    });

    workerProcess.stderr.on('data', function (data) {
        writeLog(name, "ERR " + data);
    });
}

export function stopTunnel(name: string) {
}