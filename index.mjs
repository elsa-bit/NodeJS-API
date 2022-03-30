import express from "express"
import router from "./route.mjs";

const app = express();
const port = 3000;

app.use(express.json({ extended: false }));
app.use(router)


app.listen(port, () => {
    console.log("\x1b[36m%s\x1b[0m", `\nListening at http://localhost:${port}`);
});
