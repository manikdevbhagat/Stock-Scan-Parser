import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { data } from "./assets/data";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});