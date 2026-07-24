# Day 5 – Daily Learning Journal

**Date:**24 July 2026

## What I Learned Today

Today I learned the basics of Docker and containerization. I understood that a Docker image is a blueprint containing the application, its dependencies, and the environment needed to run it, while a Docker container is a running instance of that image. I created a Dockerfile for a simple application, built a Docker image using `docker build`, and successfully ran it locally using `docker run`. I also learned about the Tech Arion deployment pipeline, where an application is built into a Docker image, pushed to the DigitalOcean (DO) Container Registry, and then deployed to Kubernetes.

## What Was Hard

The most challenging part was setting up Docker Desktop. Initially, I received an error saying Docker could not connect to the Docker engine because it was not running. After starting Docker Desktop and waiting for the engine to initialize, I was able to build the image successfully. Understanding Docker commands and the purpose of each instruction in the Dockerfile also took some time, but it became clearer after building and running the application.

## One Question I Still Have

I understand how to build and run a Docker container locally, but I would like to know how Kubernetes automatically updates running containers when a new Docker image is pushed to the DigitalOcean Container Registry without causing downtime.