package com.healthcard.app.service;

import com.healthcard.app.controller.dto.CreateWeightCheck;
import com.healthcard.app.controller.dto.WeightCheckItem;
import com.healthcard.app.entities.WeightCheck;
import com.healthcard.app.repository.UserRepository;
import com.healthcard.app.repository.WeightCheckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class WeightCheckService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WeightCheckRepository weightCheckRepository;

    public void createWeightCheck (CreateWeightCheck dto, UUID userId) {
        var user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        var weightCheck = new WeightCheck();
        weightCheck.setUser(user);
        weightCheck.setWeight(dto.weight());
        weightCheckRepository.save(weightCheck);
    }

    public List<WeightCheckItem> listWeightCheck (UUID userId) {
        var user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return weightCheckRepository.findAllByUser(user).stream().map(
                weightCheck -> new WeightCheckItem(
                        weightCheck.getWeight(),
                        weightCheck.getCreatedAt(),
                        weightCheck.getId()
                )
        ).toList();
    }

    public void deleteWeightCheck (UUID userId, Long weightCheckId) {
        var user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        var weightCheck = weightCheckRepository.findById(weightCheckId);
        if (weightCheck.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        weightCheckRepository.deleteById(weightCheckId);
    }

}
