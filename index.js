import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import queryRoutes from "./src/routes/queryRoutes.js";

dotenv.config(); //load env variables

const app = express(); //  intialise express
const PORT = process.env.PORT || 5000;

app.use(cors()); //to allow cross-origin requests
app.use(bodyParser.json()); //parse json req

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});
app.use("/api", queryRoutes);

// server listen on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
