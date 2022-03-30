import express from "express"
import router from "./route.mjs";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(morgan('tiny'));
app.use(router)


app.listen(port, () => {
    console.log("\x1b[36m%s\x1b[0m", `\nListening at http://localhost:${port}`);
});
