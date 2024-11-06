package com.healthcard.app.controller.dto;

import java.time.Instant;

public record WeightCheckItem(Float weight, Instant date, Long id) {
}
