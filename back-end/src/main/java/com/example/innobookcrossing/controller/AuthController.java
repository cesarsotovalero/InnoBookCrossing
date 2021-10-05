package com.example.innobookcrossing.controller;

import com.example.innobookcrossing.exceptions.AlreadyExistException;
import com.example.innobookcrossing.jpa.UserRepository;
import com.example.innobookcrossing.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/signin")
    @CrossOrigin(origins = "http://localhost:3000")
    public String singIn(@RequestBody List<String> userinfo) {
        if (userRepository.findUserByAlias(userinfo.get(0)).getPassword().equals(userinfo.get(1))) {
            return "Ok";
        } else {
            return "Not ok";
        }
    }


    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
//        if (!user.getAlias().equals(userRepository.findUserByAlias(user.getAlias()).getAlias()) &&
//                !user.getPassword().equals(userRepository.findUserByAlias(user.getAlias()).getPassword()))
//            return userRepository.save(user);
//        else throw new AlreadyExistException("Such user already exists");
    }

}
