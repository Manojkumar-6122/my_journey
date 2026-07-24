# Day 5 – Cloud and Docker

## What is a Docker Image?

A Docker image is a read-only template that contains everything required to run an application, including the operating system libraries, dependencies, source code, and runtime. Images are created from a Dockerfile and can be shared through container registries.

---

## What is a Docker Container?

A Docker container is a running instance of a Docker image. Containers are lightweight, isolated environments that allow applications to run consistently on different systems.

One image can create multiple containers.

---

## Tech Arion Deployment Pipeline

The deployment pipeline used by Tech Arion follows these steps:

1. Developers write the application code.
2. A Docker image is built using a Dockerfile.
3. The image is pushed to the DigitalOcean (DO) Container Registry.
4. Kubernetes pulls the image from the registry.
5. Kubernetes creates and manages containers.
6. Users access the deployed application.

Pipeline:

Developer
↓
Docker Build
↓
Docker Image
↓
DigitalOcean Container Registry
↓
Kubernetes Cluster
↓
Running Containers
↓
Users

---

## Key Takeaways

- Docker Images are blueprints.
- Containers are running applications created from images.
- Docker provides consistency across development and production.
- Kubernetes manages containers automatically.
- Container registries store Docker images.