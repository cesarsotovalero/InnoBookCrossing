CREATE TABLE IF NOT EXISTS book
(
    id    SERIAL PRIMARY KEY ,
    title  VARCHAR(200) ,
    author VARCHAR(200),
    genre VARCHAR(200) ,
    owner VARCHAR (200),
    description VARCHAR(500)
);