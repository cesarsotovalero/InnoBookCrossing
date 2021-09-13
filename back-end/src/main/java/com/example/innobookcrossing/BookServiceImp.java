package com.example.innobookcrossing;

public class BookServiceImp implements BookService {
    private final BookRepository bookRepository;

    public BookServiceImp(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book findBookById(int id) {
        return bookRepository.findBookById(id);
    }
}
