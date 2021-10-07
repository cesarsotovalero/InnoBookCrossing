package com.example.innobookcrossing.exceptions;

public class AlreadyExistException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public AlreadyExistException(String message) {
        super(message);
    }

    public AlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
