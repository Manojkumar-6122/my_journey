package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Generic wrapper used for simple success/error JSON responses,
 * e.g. after submitting the contact form or deleting a resource.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse {
    private boolean success;
    private String message;

    public static ApiResponse of(boolean success, String message) {
        return new ApiResponse(success, message);
    }
}
