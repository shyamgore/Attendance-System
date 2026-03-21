package com.shyam.attendance.system.controller;

import com.shyam.attendance.system.model.User;
import com.shyam.attendance.system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class Authcontroller {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getPassword() == null || user.getIdentifier() == null ||
                user.getRole() == null) {
            return "Invalid Data";
        }

        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser.isPresent()) {
            return "User already exists";
        }

        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public Object login(@RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getPassword() == null) {
            return "Invalid Data";
        }

        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser.isEmpty()) {
            return "User Not Found";
        }

        User foundUser = existingUser.get();

        if (foundUser.getPassword().equals(user.getPassword())) {
            return java.util.Map.of(
                    "message", "Login Successful",
                    "id", foundUser.getId(),
                    "username", foundUser.getUsername(),
                    "name", foundUser.getName(),
                    "identifier", foundUser.getIdentifier(),
                    "role", foundUser.getRole());
        }

        return "Wrong Password";
    }
}