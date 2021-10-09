package com.example.innobookcrossing.controller;

import com.example.innobookcrossing.exceptions.NotFoundException;
import com.example.innobookcrossing.jpa.BookRepository;
import com.example.innobookcrossing.jpa.UserRepository;
import com.example.innobookcrossing.model.Book;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonalLibraryController {

    static final String USER_NOT_FOUND = "User not found!";
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @ApiOperation("Add a book. Returns Book entity. PERSONAL LIBRARY")
    @PostMapping("book/{userId}/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public Book createBook(@PathVariable Integer userId, @RequestBody Book book) {
        return userRepository.findById(userId)
                .map(user -> {
                    book.setUser(user);
                    return bookRepository.save(book);
                }).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));

    }

    @ApiOperation("update a book. Returns Book entity. PERSONAL LIBRARY")
    @PutMapping("/user/{userId}/book/{bookId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Book updateBook(@PathVariable Integer userId,
                           @PathVariable Integer bookId,
                           @RequestBody Book bookUpdated) {

        if (!userRepository.existsById(userId)) {
            throw new NotFoundException(USER_NOT_FOUND);
        }
        return bookRepository.findById(bookId)
                .map(book -> {
                    book.setTitle(bookUpdated.getTitle());
                    book.setGenre(bookUpdated.getGenre());
                    book.setDescription(bookUpdated.getDescription());
                    book.setAuthor(bookUpdated.getAuthor());
                    book.setImage(bookUpdated.getImage());
                    book.setAvailable(bookUpdated.getAvailable());
                    return bookRepository.save(book);
                }).orElseThrow(() -> new NotFoundException("Book not found!"));
    }

    @ApiOperation("Returns all Book od user with id = userID. PERSONAL LIBRARY")
    @GetMapping("/user/{userId}/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getBookStudentId(@PathVariable Integer userId) {

        if (!userRepository.existsById(userId)) {
            throw new NotFoundException(USER_NOT_FOUND);
        }
        return bookRepository.findByUserId(userId);
    }
}
