package com.healthcard.app.controller.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CreateWeightCheck (
        @NotNull(message = "Weight is required")
        @Positive(message = "Weight must be greater than 0")
        @Max(value = 1000, message = "Weight must be less than 1000")
        Float weight) {
}
