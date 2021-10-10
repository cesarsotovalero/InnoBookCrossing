package com.example.innobookcrossing.dto;

import lombok.Data;

import java.util.Set;

@Data
public class UserDTO {
    Integer id;
    String alias;
    String password;
    private Set<Integer> booksID;

}
