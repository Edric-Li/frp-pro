import * as express from "express";
import {createServer} from "http";
import {Server} from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server);

server.listen(3000, () => {
    console.log("listening on port 3000.");
});

const test_Content = `
[common]
server_addr = 42.193.36.199
server_port = 32330

[Edric-GC-Work]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 32334
`;

io.on("connection", function (socket) {
    socket.emit("create-tunnel", {name: "test", content: test_Content});

    socket.on("tunnel-log", (data) => {
        console.log(data);
    });
    console.log('connect');
});