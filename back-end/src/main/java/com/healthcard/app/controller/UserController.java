package com.healthcard.app.controller;

import com.healthcard.app.controller.dto.CreateUserDto;
import com.healthcard.app.entities.Role;
import com.healthcard.app.entities.User;
import com.healthcard.app.repository.RoleRepository;
import com.healthcard.app.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
public class UserController {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    @PostMapping("/register")
    public ResponseEntity<Void> newUser(@RequestBody CreateUserDto dto) {

        var basicRole = roleRepository.findByName(Role.Values.BASIC.name());

        var userFromDb = userRepository.findByEmail(dto.username());

        if (userFromDb.isPresent()) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY);
        }

        var user = new User();
        user.setUsername(dto.username());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setEmail(dto.email());
        user.setBirthdate(LocalDate.parse(dto.birthdate()));
        user.setHeight(dto.height());
        user.setPhone(dto.phone());
        user.setGender(dto.gender());
        user.setRoles(Set.of(basicRole));

        userRepository.save(user);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Void> updateUser(@RequestBody CreateUserDto dto, JwtAuthenticationToken token, @PathVariable String id) {
        System.out.println(id);
        var currentUser = userRepository.findById(UUID.fromString(id)).get();

        var isAdmin = currentUser
                .getRoles()
                .stream()
                .anyMatch(role -> role.getName().equalsIgnoreCase(Role.Values.ADMIN.name()));

        if (isAdmin || currentUser.getUserId().equals(UUID.fromString(token.getName()))) {
            currentUser.setUsername(dto.username());
            currentUser.setPassword(passwordEncoder.encode(dto.password()));

            var elementInDb = userRepository.findByEmail(dto.email());
            if (elementInDb.isPresent() && !elementInDb.get().getUserId().equals(currentUser.getUserId()))
                return ResponseEntity.status(HttpStatus.CONFLICT).build();


            currentUser.setEmail(dto.email());
            currentUser.setBirthdate(LocalDate.parse(dto.birthdate()));
            currentUser.setHeight(dto.height());
            currentUser.setPhone(dto.phone());
            currentUser.setGender(dto.gender());
            userRepository.save(currentUser);
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<List<User>> listUsers() {
        var users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
