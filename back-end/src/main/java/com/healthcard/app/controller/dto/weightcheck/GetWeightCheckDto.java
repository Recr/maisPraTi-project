package com.healthcard.app.controller.dto.weightcheck;

import java.time.LocalDate;

public record GetWeightCheckDto(Float weight, LocalDate checkDate, Long id) {
}
