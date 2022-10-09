import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Full from "./routes/full.js";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 5000;

dotenv.config();

const DB_URL = `mongodb+srv://class369:class369@cluster0.qrjkqkk.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindandModify: false
  })
  .catch((error) => console.log(error));

// app.use("/", loginRoute);

// app.use("/", Students);

app.use("/", Full);

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
