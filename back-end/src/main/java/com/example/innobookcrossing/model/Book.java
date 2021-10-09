package com.example.innobookcrossing.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "book")
public class Book {
    @Id
    @SequenceGenerator(name = "IdSeq", sequenceName = "book_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IdSeq")
    Integer id;
    @Column(name = "title")
    String title;
    @Column(name = "author")
    String author;
    @Column(name = "genre")
    String genre;
    @Column(name = "description")
    String description;
    @Column(name = "image")
    String image;
    @Column(name = "available")
    Boolean available;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    public Book() {
    }

    public Book(Integer id, String title, String author, String genre, String description, String image,
                Boolean available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.image = image;
        this.available = available;
    }
}
