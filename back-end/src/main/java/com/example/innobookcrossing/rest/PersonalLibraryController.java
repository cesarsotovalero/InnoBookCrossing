package com.example.innobookcrossing.rest;

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
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @ApiOperation("Add a book. Returns Book entity. PERSONAL LIBRARY")
    @PostMapping("book/{userId}/add")
    public Book createBook(@PathVariable Integer userId, @RequestBody Book book) {
        return userRepository.findById(userId)
                .map(user -> {
                    book.setUser(user);
                    return bookRepository.save(book);
                }).orElseThrow(() -> new NotFoundException("User not found!"));

    }

    @ApiOperation("update a book. Returns Book entity. PERSONAL LIBRARY")
    @PutMapping("/user/{userId}/book/{bookId}")
    public Book updateAssignment(@PathVariable Integer userId,
                                 @PathVariable Integer bookId,
                                 @RequestBody Book bookUpdated) {

        if (!userRepository.existsById(userId)) {
            throw new NotFoundException("User not found!");
        }
        return bookRepository.findById(bookId)
                .map(book -> {
                    book.setTitle(bookUpdated.getTitle());
                    book.setGenre(bookUpdated.getGenre());
                    book.setOwner(bookUpdated.getOwner());
                    book.setDescription(bookUpdated.getDescription());
                    book.setAuthor(bookUpdated.getAuthor());
                    return bookRepository.save(book);
                }).orElseThrow(() -> new NotFoundException("Book not found!"));
    }

    @ApiOperation("Returns all Book od user with id = userID. PERSONAL LIBRARY")
    @GetMapping("/user/{userId}/bookss")
    public List<Book> getBookStudentId(@PathVariable Integer userId) {

        if (!userRepository.existsById(userId)) {
            throw new NotFoundException("User not found!");
        }

        return bookRepository.findByUserId(userId);
    }
}
