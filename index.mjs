import http, { request } from "http";
import route from "./route.mjs";

const server = http.createServer(async (request, response) => {
    let body = ""

    const res = await route(request, body);

    response.write(res)
    response.end();
})

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host);
console.log("\x1b[36m%s\x1b[0m", `\nListening at http://${host}:${port}`);
