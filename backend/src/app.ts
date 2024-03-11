import express from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";
import { Request, Response, NextFunction } from "express";

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(8080);
