-- =========================================================
-- Developer Portfolio - PostgreSQL Schema (reference)
-- =========================================================
-- NOTE: You do NOT need to run this manually.
-- Spring Boot + Hibernate (spring.jpa.hibernate.ddl-auto=update)
-- will automatically create these tables on first run based on
-- the JPA entities. This file is provided purely as documentation
-- of the resulting schema, and as a starting point if you switch
-- to a manual migration tool like Flyway or Liquibase later.
-- =========================================================

-- 1. Create the database (run once, from psql or a GUI client)
-- CREATE DATABASE portfolio_db;

-- 2. Connect to it
-- \c portfolio_db

-- =========================================================
-- Table: projects
-- =========================================================
CREATE TABLE IF NOT EXISTS projects (
    id             BIGSERIAL PRIMARY KEY,
    title          VARCHAR(255) NOT NULL,
    description    VARCHAR(2000) NOT NULL,
    github_url     VARCHAR(500),
    live_demo      VARCHAR(500),
    image_url      VARCHAR(500),
    display_order  INTEGER
);

-- Element collection table for Project.technologies (List<String>)
CREATE TABLE IF NOT EXISTS project_technologies (
    project_id  BIGINT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    technology  VARCHAR(255)
);

-- =========================================================
-- Table: skills
-- =========================================================
CREATE TABLE IF NOT EXISTS skills (
    id             BIGSERIAL PRIMARY KEY,
    name           VARCHAR(255) NOT NULL UNIQUE,
    icon           VARCHAR(255),
    category       VARCHAR(255),
    display_order  INTEGER
);

-- =========================================================
-- Table: contact_messages
-- =========================================================
CREATE TABLE IF NOT EXISTS contact_messages (
    id            BIGSERIAL PRIMARY KEY,
    name          VARCHAR(255) NOT NULL,
    email         VARCHAR(255) NOT NULL,
    message       VARCHAR(3000) NOT NULL,
    submitted_at  TIMESTAMP
);
