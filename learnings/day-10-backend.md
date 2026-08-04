# Day 10 - Backend (Prisma)

## What is an ORM?

ORM stands for Object Relational Mapper. It allows developers to interact with a database using programming language objects instead of writing raw SQL queries. Prisma automatically converts Prisma Client queries into SQL statements.

---

## Models

A model represents a database table.

Example:

User model → users table

Post model → posts table

Each model contains fields that become columns in the database.

---

## Relations

Relations define how tables are connected.

Example:

One User can create many Posts.

This is called a One-to-Many relationship.

Prisma makes it easy to define and query these relationships.

---

## Migration

A migration is the process of updating the database schema.

When we run:

npx prisma migrate dev

Prisma compares the schema with the database and generates SQL to create or modify tables. It also keeps track of schema changes so the database structure remains synchronized with the application.