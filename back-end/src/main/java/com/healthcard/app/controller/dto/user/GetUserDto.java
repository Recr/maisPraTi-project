package com.healthcard.app.controller.dto.user;

import com.healthcard.app.entities.enums.GenderEnum;

import java.time.LocalDate;

public record GetUserDto(
        String username,
        String email,
        LocalDate birthdate,
        Float height,
        String phone,
        GenderEnum gender
) {
}
