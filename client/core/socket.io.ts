import {io} from "socket.io-client";
import config from "../config";

const socketClient = io(`${config.server_protocol}://${config.server_host}:${config.server_port}`);

export default socketClient;
