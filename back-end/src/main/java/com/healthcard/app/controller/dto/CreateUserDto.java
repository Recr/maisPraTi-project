package com.healthcard.app.controller.dto;

public record CreateUserDto(
        String username,
        String password,
        String email,
        String birthdate,
        Float height,
        String phone,
        String gender        ) {
}
