A lightweight backend service that mimics a Gen AI-powered data query system, allowing users to send natural language queries and receive simulated database responses. This project is built using Node.js and Express.js with an in-memory database.
1.CLone the project
2.for installing dependencies: npm install
3.Set Up Environment Variables:PORT=
4.run the server:npm start

deployed LINK-https://mini-simulation.onrender.com/

API-endpoints for postman:-

/api/query: Accepts natural language query and return results
        this endpoint require an header (Authorization:SecretToken)
        {
              "question": "How many users?"
            }

        
/explain: breaks down how the system returns simulated query breakdown
        {
            "question": "What is the average salary?"
            }

/validate: Checks if query is possible to execute
          {
                "question": "What is the average salary?"
              }
