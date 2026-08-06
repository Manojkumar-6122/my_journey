package com.portfolio.exception;

/**
 * Thrown when a requested entity (Project, Skill, ContactMessage) does not exist.
 * Handled globally by GlobalExceptionHandler and translated into a 404 response.
 */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
