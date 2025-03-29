import {
  translateToSQL,
  getMockResponse,
  generateQuerySteps,
} from "../config/queryService.js";

//Accepts natural language query and translates to Sql and get the response
export const handleQuery = (req, res) => {
  const { question } = req.body;
  const sqlQuery = translateToSQL(question);
  const response = getMockResponse(sqlQuery);
  res.json({
    query: sqlQuery,
    result: response,
  });
};
/* 
export const explainQuery = (req, res) => {
  res.json({
    message: "This API converts natural language into structured queries.",
  });
}; */

export const explainQuery = (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Query is missing in request body" });
  }

  const sqlQuery = translateToSQL(question);

  if (sqlQuery === "INVALID QUERY") {
    return res.status(400).json({ error: "Unable to process the query" });
  }

  const steps = generateQuerySteps(question, sqlQuery);

  res.json({
    query: sqlQuery,
    steps: steps,
  });
};

// Checks query feasibility
export const validateQuery = (req, res) => {
  const { question } = req.body;
  const sqlQuery = translateToSQL(question);
  res.json({
    valid: sqlQuery !== "UNKNOWN_QUERY",
    sqlQuery,
  });
};
