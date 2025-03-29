import express from "express";
import {
  handleQuery,
  explainQuery,
  validateQuery,
} from "../controllers/queryController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/query", authenticate, handleQuery);
router.get("/explain", explainQuery);
router.post("/validate", validateQuery);

export default router;
