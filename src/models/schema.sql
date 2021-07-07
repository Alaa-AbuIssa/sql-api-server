DROP TABLE IF EXISTS food;

CREATE TABLE food (
    id SERIAL PRIMARY KEY ,
     itemName char(300),
     price INT
);

DROP TABLE IF EXISTS clothes;

CREATE TABLE clothes (
    id SERIAL PRIMARY KEY ,
     itemName char(300),
     price INT
);