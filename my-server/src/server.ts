import express, { Express } from "express";
import dotenv from "dotenv";
import { todoRouter } from "./routes/todo.routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`[Server]: I am running at https://localhost:${PORT}`);
});
