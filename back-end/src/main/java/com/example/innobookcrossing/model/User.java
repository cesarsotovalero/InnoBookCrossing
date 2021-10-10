package com.example.innobookcrossing.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @SequenceGenerator(name = "IdSeq", sequenceName = "user_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IdSeq")
    Integer id;
    @Column(name = "alias")
    String alias;
    @Column(name = "password")
    String password;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Book> books;

    public User() {
    }

    public User(Integer id, String alias, String password) {
        this.id = id;
        this.alias = alias;
        this.password = password;
    }
}
