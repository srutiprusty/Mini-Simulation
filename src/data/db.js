/* const db = {
  "SELECT COUNT(*) FROM users": 5000,
  "SELECT * FROM orders WHERE amount > 100": [
    { id: 1, amount: 150 },
    { id: 2, amount: 200 },
  ],
  "SELECT AVG(salary) FROM employees": 65000,
};

export default db; */
export const data = {
  users: [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
  ],
  employees: [
    { id: 1, name: "John", salary: 50000 },
    { id: 2, name: "Jane", salary: 60000 },
  ],
};
