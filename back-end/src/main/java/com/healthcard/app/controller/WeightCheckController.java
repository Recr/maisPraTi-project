package com.healthcard.app.controller;

import com.healthcard.app.controller.dto.CreateWeightCheck;
import com.healthcard.app.controller.dto.ListWeightCheckDto;
import com.healthcard.app.repository.UserRepository;
import com.healthcard.app.repository.WeightCheckRepository;
import com.healthcard.app.service.WeightCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

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
        var user = UUID.fromString(token.getName());
        var weightChecks = weightCheckService.listWeightCheck(user);
        return ResponseEntity.ok(new ListWeightCheckDto(weightChecks));
    }

    @PostMapping("/user/weight-check")
    public ResponseEntity<Void> createWeightCheck (@RequestBody CreateWeightCheck dto, JwtAuthenticationToken token) {
        var uuid = UUID.fromString(token.getName());
        weightCheckService.createWeightCheck(dto, uuid);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/user/weight-check/{id}")
    public ResponseEntity<Void> deleteWeightCheck (JwtAuthenticationToken token, @PathVariable Long id) {
        var userId = UUID.fromString(token.getName());
        weightCheckService.deleteWeightCheck(userId, id);
        return ResponseEntity.ok().build();
    }


}
