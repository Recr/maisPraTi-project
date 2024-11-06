package com.healthcard.app.controller;

import com.healthcard.app.controller.dto.CreateWeightCheck;
import com.healthcard.app.controller.dto.ListWeightCheckDto;
import com.healthcard.app.controller.dto.WeightCheckItem;
import com.healthcard.app.repository.UserRepository;
import com.healthcard.app.repository.WeightCheckRepository;
import com.healthcard.app.service.WeightCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class WeightCheckController {

    @Autowired
    private WeightCheckService weightCheckService;
    @Autowired
    private WeightCheckRepository weightCheckRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/weight-check")
    public ResponseEntity<ListWeightCheckDto> weightChecks (JwtAuthenticationToken token) {
        var user = userRepository.findById(UUID.fromString(token.getName()));
        var weightChecks = weightCheckRepository.findAllByUser(user).stream().map(
                weightCheck -> new WeightCheckItem(
                        weightCheck.getWeight(),
                        weightCheck.getUpdatedAt()
                )
        ).toList();
        return ResponseEntity.ok(new ListWeightCheckDto(weightChecks));
    }

    @PostMapping("/user/weight-check")
    public ResponseEntity<Void> createWeightCheck (@RequestBody CreateWeightCheck dto, JwtAuthenticationToken token) {
        var uuid = UUID.fromString(token.getName());
        weightCheckService.createWeightCheck(dto, uuid);
        return ResponseEntity.ok().build();
    }

}
