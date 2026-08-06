# Day 11 - Portfolio

## What I Built

Today I connected my React frontend with my Spring Boot backend to create a full-stack portfolio application. Instead of displaying hardcoded data, the frontend now fetches live data from the backend API, which reads it from the PostgreSQL database.

---

# How the Pieces Connect (UI → API → DB)

The application follows a three-layer flow:

```
User
   │
   ▼
React Frontend (UI)
   │
   │ HTTP Request (fetch/Axios)
   ▼
Spring Boot REST API
   │
   │ Service Layer
   ▼
Repository (JPA)
   │
   ▼
PostgreSQL Database
```

### Step 1: React UI

The user opens the portfolio website.

When the Skills component loads, React executes the `useEffect()` hook.

```jsx
useEffect(() => {
    getAllSkills();
}, []);
```

The `getAllSkills()` function sends an HTTP GET request to the backend.

---

### Step 2: API Request

The frontend sends a request like:

```
GET http://localhost:8080/api/skills
```

This request is received by the Spring Boot controller.

---

### Step 3: Controller

The controller receives the request and calls the service layer.

```java
@GetMapping
public List<SkillDTO> getAllSkills() {
    return skillService.getAllSkills();
}
```

The controller should only handle HTTP requests and responses.

---

### Step 4: Service Layer

The service contains the business logic.

```java
skillRepository.findAllByOrderByDisplayOrderAsc();
```

The service fetches all skills from the repository and converts Entity objects into DTO objects before returning them.

---

### Step 5: Repository

The repository communicates with the database using Spring Data JPA.

```java
public interface SkillRepository extends JpaRepository<Skill, Long> {
}
```

No SQL queries are written manually because Hibernate generates them automatically.

---

### Step 6: Database

Hibernate sends SQL queries to PostgreSQL.

Example:

```sql
SELECT * FROM skills ORDER BY display_order;
```

The database returns the data to Hibernate.

---

### Step 7: Response

Spring Boot converts Java objects into JSON automatically.

Example:

```json
[
  {
    "id": 1,
    "name": "Java",
    "icon": "java",
    "category": "Backend",
    "displayOrder": 1
  }
]
```

---

### Step 8: React Receives Data

The frontend receives the JSON response.

```javascript
const skills = await getAllSkills();
```

The response is stored in React state.

```javascript
setSkills(data);
```

React automatically re-renders the component and displays the skill cards.

---

# Why We Need DTOs

Instead of returning Entity objects directly, the backend returns DTOs.

Benefits:

- Hides unnecessary fields
- Improves security
- Keeps the API independent from the database structure
- Makes future changes easier

---

# Why We Need Services

The Service layer contains business logic.

Responsibilities:

- Validate data
- Call repositories
- Convert Entity to DTO
- Handle exceptions

The controller remains simple and clean.

---

# Why We Need Repositories

Repositories are responsible only for database operations.

They perform operations like:

- Save
- Update
- Delete
- Find
- Count

Spring Data JPA automatically provides these methods.

---

# Understanding CORS

My frontend runs on:

```
http://localhost:5173
```

My backend runs on:

```
http://localhost:8080
```

Since the ports are different, the browser considers them different origins.

Without CORS, the browser blocks the request for security reasons.

Spring Boot allows requests using:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

or by using a global CORS configuration.

---

# How I Tested the Application

I tested the backend first.

1. Started Spring Boot
2. Opened

```
http://localhost:8080/api/skills
```

3. Verified that JSON data was returned.

Next I started the React application.

When the Skills page loaded:

- React sent an API request.
- The backend returned JSON.
- The JSON appeared in the UI.
- Chrome DevTools showed HTTP Status **200 OK**, confirming successful communication.

---

# What I Learned

- How React communicates with Spring Boot.
- How REST APIs transfer data using JSON.
- The role of Controller, Service, Repository, and Entity.
- How Hibernate interacts with PostgreSQL.
- Why DTOs are important.
- How CORS allows frontend and backend running on different ports to communicate.
- How to test API requests using the browser and Chrome DevTools.