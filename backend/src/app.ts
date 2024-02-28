import express from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";
import { Request, Response, NextFunction } from "express";

require("dotenv").config();

const app = express();

app.use(json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
