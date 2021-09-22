CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    alias    VARCHAR(200),
    password VARCHAR(200)
);

CREATE SEQUENCE user_seq START WITH 3 INCREMENT BY 1;
CREATE TABLE book
(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(200),
    author      VARCHAR(200),
    genre       VARCHAR(200),
    owner       VARCHAR(200),
    description VARCHAR(500),
    user_id     int,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE SEQUENCE book_seq START WITH 2 INCREMENT BY 1;