-- list all database \l
-- list all tables \d
-- connect db \c <selected db>


-- These are the PostgreSQL code to paste into the PSQL console to create tables manually 
CREATE TABLE restaurants (
    id PRIMARY KEY BIGSERIAL NOT NULL, 
    name varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    price_range int NOT NULL check(price_range >=1 and price_range <=5)
)

INSERT INTO restaurants( name, location, price_range) values ( 'Test Restaurant Name', 'Vancouver', 25);
INSERT INTO restaurants( name, location, price_range) values ( 'TestName2', 'Vancouver', 30);