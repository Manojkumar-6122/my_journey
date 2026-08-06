# Developer Portfolio — Full Stack Application

A full-stack, database-driven developer portfolio website.

- **Frontend:** React (Vite) + Tailwind CSS + Axios + React Router
- **Backend:** Java Spring Boot (Web, Data JPA, Validation, Lombok)
- **Database:** PostgreSQL
- **Architecture:** REST API, layered backend (Controller → Service → Repository → Entity)

---

## 1. Project Structure

```
developer-portfolio/
├── backend/                  # Spring Boot REST API
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/portfolio/
│       │   ├── controller/    # REST controllers
│       │   ├── service/       # Business logic
│       │   ├── repository/    # Spring Data JPA repositories
│       │   ├── entity/        # JPA entities (Project, Skill, ContactMessage)
│       │   ├── dto/           # Request/response DTOs
│       │   ├── config/        # CORS config + startup data seeder
│       │   └── exception/     # Global exception handling
│       └── resources/
│           ├── application.properties
│           └── schema-reference.sql
│
└── frontend/                 # React + Vite + Tailwind app
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── components/        # Navbar, Hero, About, Skills, Projects, Contact, Footer
        ├── pages/              # Home.jsx (assembles all sections)
        ├── services/           # api.js + one service file per resource
        └── assets/
```

---

## 2. Prerequisites

Make sure you have the following installed:

| Tool | Version |
|---|---|
| Java JDK | 17+ |
| Maven | 3.8+ (or use the included `mvnw` if you generate one) |
| Node.js | 18+ |
| npm | 9+ |
| PostgreSQL | 14+ |

---

## 3. Database Setup (PostgreSQL)

1. Start PostgreSQL and open `psql` (or any GUI client like pgAdmin/DBeaver).
2. Create the database:

   ```sql
   CREATE DATABASE portfolio_db;
   ```

3. That's it — you do **not** need to manually create tables. Spring Boot's
   `spring.jpa.hibernate.ddl-auto=update` setting will automatically create
   the `projects`, `project_technologies`, `skills`, and `contact_messages`
   tables the first time the backend starts.

   (`backend/src/main/resources/schema-reference.sql` documents the resulting
   schema for reference, or as a starting point if you later switch to
   Flyway/Liquibase migrations.)

---

## 4. Backend Setup (Spring Boot)

1. Open `backend/src/main/resources/application.properties` and update the
   PostgreSQL credentials to match your local setup:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/portfolio_db
   spring.datasource.username=postgres
   spring.datasource.password=postgres
   ```

2. From the `backend/` folder, run:

   ```bash
   mvn spring-boot:run
   ```

   Or build a jar and run it:

   ```bash
   mvn clean package -DskipTests
   java -jar target/developer-portfolio-backend.jar
   ```

3. The API will start on **http://localhost:8080**.

4. On first startup, `DataSeeder` automatically inserts sample Skills and
   Projects into the database (only if those tables are empty), so the
   frontend has real data to display immediately.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/{id}` | Get one project |
| POST | `/api/projects` | Create a project |
| PUT | `/api/projects/{id}` | Update a project |
| DELETE | `/api/projects/{id}` | Delete a project |
| GET | `/api/skills` | List all skills |
| GET | `/api/skills/{id}` | Get one skill |
| POST | `/api/skills` | Create a skill |
| PUT | `/api/skills/{id}` | Update a skill |
| DELETE | `/api/skills/{id}` | Delete a skill |
| POST | `/api/contact` | Submit a contact form message |
| GET | `/api/contact` | List all submitted messages |
| GET | `/api/contact/{id}` | Get one message |
| DELETE | `/api/contact/{id}` | Delete a message |

---

## 5. Frontend Setup (React + Vite)

1. From the `frontend/` folder, install dependencies:

   ```bash
   npm install
   ```

2. (Optional) Copy `.env.example` to `.env` if you need to point at a
   different backend URL:

   ```bash
   cp .env.example .env
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:5173** in your browser. The app will fetch
   Skills and Projects live from the Spring Boot API at
   `http://localhost:8080/api`.

5. To build for production:

   ```bash
   npm run build
   npm run preview
   ```

> To use the "Download Resume" button, place a real `resume.pdf` file in
> `frontend/public/resume.pdf`.

---

## 6. Running Both Together

Open two terminals:

```bash
# Terminal 1 — backend
cd backend
mvn spring-boot:run

# Terminal 2 — frontend
cd frontend
npm install
npm run dev
```

Then visit **http://localhost:5173**.

CORS is already configured in `CorsConfig.java` to allow requests from
`http://localhost:5173` (the default Vite dev server port).

---

## 7. Customizing Content

- **Hero text / name / title:** edit `frontend/src/components/Hero.jsx`.
- **Bio:** edit `frontend/src/components/About.jsx`.
- **Skills / Projects:** either edit the seed data in
  `backend/src/main/java/com/portfolio/config/DataSeeder.java`, or use the
  CRUD REST endpoints (e.g. with Postman) to add/update/delete records
  directly in the database.
- **Social links / footer:** edit `frontend/src/components/Footer.jsx`.

---

## 8. Tech Highlights

- Clean **layered backend architecture**: Controller → Service → Repository → Entity, with DTOs decoupling the API contract from JPA entities.
- **Global exception handling** (`GlobalExceptionHandler`) for consistent JSON error responses and bean-validation error messages.
- **Automatic data seeding** on first run — no manual SQL inserts needed.
- Fully **responsive, mobile-first Tailwind UI** with hover animations, card shadows, rounded corners, and smooth scrolling between sections.
- Frontend is **100% data-driven** — Skills and Projects are fetched from the backend via Axios, not hardcoded.

---

## 9. Troubleshooting

- **Frontend shows "Could not load skills/projects":** make sure the backend is running on port 8080 and check the browser console/network tab for CORS or connection errors.
- **Backend fails to start with a datasource error:** double-check `application.properties` credentials and that PostgreSQL is running and `portfolio_db` exists.
- **Port already in use:** change `server.port` in `application.properties` (backend) or pass `--port` to `vite` (frontend), and update `VITE_API_BASE_URL` accordingly.
