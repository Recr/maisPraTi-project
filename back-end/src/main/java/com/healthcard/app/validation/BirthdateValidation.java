package com.healthcard.app.validation;

import com.healthcard.app.validation.constraints.Birthdate;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.time.LocalDate;

public class BirthdateValidation implements ConstraintValidator<Birthdate, String> {
    @Override
    public void initialize(Birthdate constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        try {
            LocalDate validate = LocalDate.parse(s);
            return true;
        } catch (Exception e) {
            return false;
        }

    }
}
