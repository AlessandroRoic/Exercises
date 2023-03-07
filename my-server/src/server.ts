import express, { Express } from "express";
import dotenv from "dotenv";
import { TODO_ROUTE, todoRouter } from "./routes/Todo.routes";
import helmet from "helmet";
import cors from "cors";

dotenv.config();

const BASE_API = "/api";
const app: Express = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(`${BASE_API}${TODO_ROUTE}`, todoRouter);

app.listen(PORT, () => {
  console.log(`[Server]: I am running at https://localhost:${PORT}`);
});
