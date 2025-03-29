import { data } from "../data/db.js";
// Convert natural language to SQL
export const translateToSQL = (question) => {
  if (question.includes("users")) return "SELECT * FROM users";
  if (question.includes("employees")) return "SELECT * FROM employees";
  if (question.includes("average salary"))
    return "SELECT AVG(salary) FROM employees";
  return "INVALID QUERY";
};

// response based on the SQL query
export const getMockResponse = (query) => {
  if (query.includes("users")) return data.users;
  if (query.includes("employees")) return data.employees;
  if (query.includes("AVG(salary)")) return { average_salary: 55000 };
  return { error: "Query not understood" };
};

//explaination steps
export const generateQuerySteps = (question, sqlQuery) => {
  if (sqlQuery.includes("users")) {
    return [
      "Identify 'users' table",
      "Retrieve all columns from 'users'",
      "Return all user records",
    ];
  }

  if (sqlQuery.includes("employees")) {
    return [
      "Identify 'employees' table",
      "Retrieve all columns from 'employees'",
      "Return all employee records",
    ];
  }

  if (sqlQuery.includes("AVG(salary)")) {
    return [
      "Identify 'employees' table",
      "Select 'salary' column",
      "Apply aggregation function AVG() to compute the average salary",
      "Return the computed value",
    ];
  }

  return ["Query breakdown unavailable"];
};
