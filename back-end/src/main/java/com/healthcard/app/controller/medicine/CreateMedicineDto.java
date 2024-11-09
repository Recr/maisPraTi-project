package com.healthcard.app.controller.medicine;

import com.healthcard.app.entities.enums.DoseUnitEnum;
import com.healthcard.app.entities.enums.FrequencyUnitEnum;
import com.healthcard.app.validation.constraints.DateTime;
import com.healthcard.app.validation.constraints.DoseUnit;
import com.healthcard.app.validation.constraints.FrequencyUnit;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public class CreateMedicineDto {
    @NotBlank
    private String name;
    private String description;
    @Min(0)
    private Double frequencyValue;
    @FrequencyUnit
    private FrequencyUnitEnum frequencyUnit;
    @Min(0)
    private Double doseValue;
    @DoseUnit
    private DoseUnitEnum doseUnit;
    @DateTime
    private LocalDateTime registerDate;
}
