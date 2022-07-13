import {writeFileSync,ensureFileSync} from "fs-extra";
import * as path from "path";

interface ICommon {
    server_addr: string;
    server_port: string;
}

export function updateCommon(options: ICommon) {
    let str = "[common]\n";

    for (const key in options) {
        str += `${key} = ${options[key]}\n`;
    }
    const filePath = path.resolve(__dirname, `./conf/${options.server_addr}.ini`);

    ensureFileSync(filePath);
    writeFileSync(filePath, str, "utf8");
}