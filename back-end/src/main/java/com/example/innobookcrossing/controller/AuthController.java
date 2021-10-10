package com.example.innobookcrossing.controller;

import com.example.innobookcrossing.dto.UserDTO;
import com.example.innobookcrossing.exceptions.AlreadyExistException;
import com.example.innobookcrossing.jpa.UserRepository;
import com.example.innobookcrossing.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signin")
    @CrossOrigin(origins = "http://localhost:3000")
    public User singIn(@RequestBody UserDTO userDTO) {
        User user = new User(userDTO.getId(), userDTO.getAlias(), userDTO.getPassword());
        if (userRepository.findUserByAlias(user.getAlias()) == null) {
            throw new AlreadyExistException("User with such alias does not exist.");
        } else {
            if (userRepository.findUserByAlias(user.getAlias()).getPassword().equals(user.getPassword())) {
                return userRepository.findUserByAlias(user.getAlias());
            } else {
                throw new AlreadyExistException("User with such password does not exist.");
            }
        }
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public User register(@RequestBody UserDTO userDTO) {
        User user = new User(userDTO.getId(), userDTO.getAlias(), userDTO.getPassword());
        if (userRepository.findUserByAlias(user.getAlias()) == null) {
            return userRepository.save(user);
        } else throw new AlreadyExistException("User already exists.");
    }
}
