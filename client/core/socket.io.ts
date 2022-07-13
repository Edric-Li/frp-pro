import {io} from "socket.io-client";
import config from "./config";

const socket = io(`${config.server_protocol}://${config.server_host}:${config.server_port}`);
