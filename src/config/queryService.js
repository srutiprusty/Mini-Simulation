/* import db from "../data/db.js"; */

/* 
export const translateToSQL = (query) => {
  if (query.toLowerCase().includes("how many users")) {
    return "SELECT COUNT(*) FROM users";
  } else if (query.toLowerCase().includes("high value orders")) {
    return "SELECT * FROM orders WHERE amount > 100";
  } else if (query.toLowerCase().includes("average salary")) {
    return "SELECT AVG(salary) FROM employees";
  } else {
    return "UNKNOWN_QUERY";
  }
};

export const getMockResponse = (sqlQuery) => {
  return db[sqlQuery] || "No relevant data found.";
};
 */
import { data } from "../data/db.js";
// Convert natural language to pseudo-SQL
export const translateToSQL = (question) => {
  if (question.includes("users")) return "SELECT * FROM users";
  if (question.includes("employees")) return "SELECT * FROM employees";
  if (question.includes("average salary"))
    return "SELECT AVG(salary) FROM employees";
  return "INVALID QUERY";
};

// Generate a mock response based on the pseudo-SQL query
export const getMockResponse = (query) => {
  if (query.includes("users")) return data.users;
  if (query.includes("employees")) return data.employees;
  if (query.includes("AVG(salary)")) return { average_salary: 55000 };
  return { error: "Query not understood" };
};
