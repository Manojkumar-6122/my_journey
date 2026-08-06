# Journal – Day 11

## What I learned today

Today I built a portfolio and in that I connected my React frontend with my Spring Boot backend. I learned how the frontend sends HTTP requests to REST APIs and how the backend fetches data from the PostgreSQL database before returning it as JSON. I also learned why the frontend and backend can run on different ports and how CORS allows them to communicate securely. I tested my APIs in both the browser and Postman and confirmed that the data displayed in the React application matched the data stored in the database.

## What was hard

The most challenging part was understanding how the frontend actually talks to the backend. I was initially confused about using different ports (5173 for React and 8080 for Spring Boot), how Axios/Fetch sends requests, and why CORS was required. It also took some time to understand the project structure and where API service files should be placed.

## One question I still have

How can I deploy both the React frontend and the Spring Boot backend together so that they work as one application in production without CORS issues?