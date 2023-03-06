import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.send("Test 2");
});

app.listen(PORT, () => {
  console.log(`[Server]: I am running at https://localhost:${PORT}`);
});
