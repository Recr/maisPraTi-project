package com.healthcard.app.service;

import com.healthcard.app.controller.dto.CreateWeightCheck;
import com.healthcard.app.entities.WeightCheck;
import com.healthcard.app.repository.UserRepository;
import com.healthcard.app.repository.WeightCheckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class WeightCheckService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WeightCheckRepository weightCheckRepository;

    public void createWeightCheck (CreateWeightCheck dto, UUID id) {

        var user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        var weightCheck = new WeightCheck();
        weightCheck.setUser(user);
        weightCheck.setWeight(dto.weight());

        weightCheckRepository.save(weightCheck);
    }
}
