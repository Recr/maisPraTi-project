package com.healthcard.app.controller.medicine;

import com.healthcard.app.entities.enums.DoseUnitEnum;
import com.healthcard.app.entities.enums.FrequencyUnitEnum;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public class CreateMedicineDto {
    @NotBlank
    private String name;

    private String description;

    private Double frequencyValue;

    private FrequencyUnitEnum frequencyUnit;

    private Double doseValue;

    private DoseUnitEnum doseUnit;

    private LocalDateTime registerDate;
}
