# Day 10 Journal

## What I learned today

Today I learned how to use Prisma as an ORM with a PostgreSQL database. I created two models, User and Post, and connected them using a one-to-many relationship. I learned how Prisma schema defines the database structure, how migrations create database tables, and how to use Prisma Client to create and query related data. I also understood why unique constraints are useful for preventing duplicate data.

## What was hard

The most challenging part was setting up the database and resolving the migration issues. I initially used my existing Neon database, which caused migration drift errors because it already contained tables from another project. Later, while running my query, I encountered a unique constraint error because I tried to insert a user with the same email twice. Understanding these errors and fixing them helped me learn how Prisma handles database consistency.

## One question I still have

I understand how Prisma migrations work in development, but I would like to learn how database migrations are safely managed in production environments when multiple developers are working on the same project.