import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

dotenv.config();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use("/", Routes);

const PORT = 8000;

connection();

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
