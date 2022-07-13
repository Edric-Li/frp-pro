import {createTunnel, runTunnel, stopTunnel} from "./core/frp";
import socketClient from "./core/socket.io";

interface ICreateTunnel {
    name: string;
    content: string;
}

interface IRunTunnel {
    name: string;
    content: string;
}

socketClient.on("connect", () => {
    socketClient.on("create-tunnel", ({name, content}: ICreateTunnel) => {
        createTunnel(name, content);
        runTunnel(name);
    });

    socketClient.on("start-tunnel", ({name}: IRunTunnel) => {
        runTunnel(name);
    });

    socketClient.on("stop-tunnel", ({name}: IRunTunnel) => {
        stopTunnel(name);
    });
});