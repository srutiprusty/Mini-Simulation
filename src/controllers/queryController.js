import { translateToSQL, getMockResponse } from "../config/queryService.js";

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

export const explainQuery = (req, res) => {
  res.json({
    message: "This API converts natural language into structured queries.",
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
