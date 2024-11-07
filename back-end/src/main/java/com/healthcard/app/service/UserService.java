package com.healthcard.app.service;

import com.healthcard.app.controller.dto.CreateUserDto;
import com.healthcard.app.entities.Role;
import com.healthcard.app.entities.User;
import com.healthcard.app.entities.enums.GenderEnum;
import com.healthcard.app.repository.RoleRepository;
import com.healthcard.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void createUser (CreateUserDto dto) {
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
        user.setGender(GenderEnum.valueOf(dto.gender()));
        user.setRoles(Set.of(basicRole));

        userRepository.save(user);
    }

    public void updateUser (CreateUserDto dto, @PathVariable String id, JwtAuthenticationToken token) {

        UUID updatedUserUuid = UUID.fromString(id);
        var updatedUser = userRepository.findById(updatedUserUuid).get();
        var currentUserUuid = UUID.fromString(token.getName());
        var currentUser = userRepository.findById(currentUserUuid).get();
        var isAdmin = currentUser
                .getRoles()
                .stream()
                .anyMatch(role -> role.getName().equalsIgnoreCase(Role.Values.ADMIN.name()));

        if (isAdmin || updatedUser.getUserId().equals(currentUserUuid)) {
            updatedUser.setUsername(dto.username());
            updatedUser.setPassword(passwordEncoder.encode(dto.password()));

            String email = String.valueOf(userRepository.findByEmail(currentUser.getEmail()));
            System.out.println(email);
            if (!email.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Used Email");
            }

            updatedUser.setEmail(dto.email());
            updatedUser.setBirthdate(LocalDate.parse(dto.birthdate()));
            updatedUser.setHeight(dto.height());
            updatedUser.setPhone(dto.phone());
            updatedUser.setGender(GenderEnum.valueOf(dto.gender()));
            userRepository.save(updatedUser);
        } else {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
    }
}
