package com.healthcard.app.controller.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record LoginRequest (
        @Email(message = "Invalid credentials")
        String email,
        @Size(min = 8, max = 64, message = "Invalid credentials")
        String password){
}
