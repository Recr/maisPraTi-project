package com.healthcard.app.controller.dto.weightcheck;

import java.time.LocalDate;

public record GetWeightCheckDto(Float weight, LocalDate date, Long id) {
}
