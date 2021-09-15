package com.example.innobookcrossing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookPageController {
    @Autowired
    BookService bookService;

    @GetMapping("book/get/{id}")
    public Book getBook(@PathVariable Integer id) {
        return bookService.findBookById(id);
    }
}
