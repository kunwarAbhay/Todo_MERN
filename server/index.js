import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DB_URL =
  "mongodb+srv://abhay:123@cluster0.aesm1or.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL, { dbName: "task" }, (err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log(err);
  }
});

app.use("/todo", todoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
