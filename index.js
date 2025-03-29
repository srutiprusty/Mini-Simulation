import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import queryRoutes from "./src/routes/queryRoutes.js";
/* import { loadEnv } from './config/env.js';
 */
dotenv.config();
/* loadEnv();
 */
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", queryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
