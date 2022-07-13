import {config as dotEnvConfig, DotenvParseOutput} from "dotenv";

interface IGlobalConfig extends DotenvParseOutput {
    /**
     * The protocol to use when connecting to the server.
     */
    server_protocol: string;
    /**
     * The host to use when connecting to the server.
     */
    server_host: string;
    /**
     * The port to use when connecting to the server.
     */
    server_port: string;

    /**
     * The path to the frpc executable.
     */
    frpc_exe_path:string;

    /**
     * The generated ini storage folder.
     */
    frpc_ini_folder_path:string;
}

export default dotEnvConfig().parsed as IGlobalConfig;
