package com.example.innobookcrossing.jpa;

import com.example.innobookcrossing.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Book findBookById(int id);

    List<Book> findAll();

    List<Book> findByUserId(int id);

    Book findBookByTitle(String title);
}
