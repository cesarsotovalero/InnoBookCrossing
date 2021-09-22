package com.example.innobookcrossing.rest;

import com.example.innobookcrossing.exceptions.NotFoundException;
import com.example.innobookcrossing.jpa.BookRepository;
import com.example.innobookcrossing.jpa.UserRepository;
import com.example.innobookcrossing.model.Book;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainPageController {

    @Autowired
    private BookRepository bookRepository;

    @ApiOperation("Returns all Books. MAIN PAGE / LIBRARY")
    @GetMapping("book/get/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @ApiOperation("Get operation. Return book by specified ID. MAIN PAGE / LIBRARY")
    @GetMapping("book/get/{id}")
    public Book getBook(@PathVariable Integer id) {
        return bookRepository.findBookById(id);
    }

    @ApiOperation("Search for a book. MAIN PAGE / LIBRARY")
    @GetMapping("book/search")
    public Book getBooks(@RequestParam
                         @Parameter(description = "Searching book by title") String search) {
        return bookRepository.findBookByTitle(search);
    }
}
