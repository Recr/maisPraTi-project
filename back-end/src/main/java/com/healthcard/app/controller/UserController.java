package com.healthcard.app.controller;

import com.healthcard.app.controller.dto.CreateUserDto;
import com.healthcard.app.controller.dto.UpdateUserDto;
import com.healthcard.app.entities.User;
import com.healthcard.app.repository.RoleRepository;
import com.healthcard.app.repository.UserRepository;
import com.healthcard.app.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @Transactional
    @PostMapping("/register")
    public ResponseEntity<String> createUser(@Valid @RequestBody CreateUserDto dto) {
        try {
            userService.createUser(dto);
            return ResponseEntity.ok().build();
        } catch (Exception | Error e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<String> updateUser(@Valid @RequestBody UpdateUserDto dto, JwtAuthenticationToken token, @PathVariable String id) {
        try {
            userService.updateUser(dto, id, token);
            return ResponseEntity.ok().build();
        } catch (Exception | Error e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<List<User>> listUsers() {
        var users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
