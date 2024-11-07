package com.healthcard.app.validation.constraints;

import com.healthcard.app.validation.BirthdateValidation;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = BirthdateValidation.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface Birthdate {
    String message () default "Invalid birthdate";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
