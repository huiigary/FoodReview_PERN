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

CREATE TABLE reviews ( 
    id BIGSERIAL PRIMARY KEY NOT NULL,
    restaurant_ID BIGINT NOT NULL REFERENCES restaurants (id),
    name VARCHAR(100) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check (rating >=1 AND rating <=5)
);
INSERT INTO reviews (name, review, rating) values ('test name', 'test review', 1);
INSERT INTO reviews (name, review, rating) values ('test name2', 'test review2', 2);
-- ALTER TABLE reviews ALTER COLUMN ratings SET NOT NULL // used to alter column