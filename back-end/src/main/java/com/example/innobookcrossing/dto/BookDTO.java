package com.example.innobookcrossing.dto;

import lombok.Data;

@Data
public class BookDTO {
    Integer id;

    String title;

    String author;

    String genre;

    String description;

    String image;

    Boolean available;
}
