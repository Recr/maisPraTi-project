package com.healthcard.app.repository;

import com.healthcard.app.entities.User;
import com.healthcard.app.entities.WeightCheck;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface WeightCheckRepository extends JpaRepository<WeightCheck, UUID> {
    List<WeightCheck> findAllByUser(Optional<User> user);
}
