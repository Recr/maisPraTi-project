package com.healthcard.app.validation.constraints;

import com.healthcard.app.validation.DateValidation;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = DateValidation.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface Date {
    String message () default "Invalid checkDate";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
