DROP TABLE IF EXISTS cities;
CREATE TABLE cities(id serial PRIMARY KEY, name VARCHAR(100), population integer);

INSERT INTO cities(name, population) VALUES ('도시', 432000);
INSERT INTO cities(name, population) VALUES ('샘플', 1759000);
INSERT INTO cities(name, population) VALUES ('Prague', 1280000);
INSERT INTO cities(name, population) VALUES ('Warsaw', 1748000);
INSERT INTO cities(name, population) VALUES ('Los Angeles', 3971000);
INSERT INTO cities(name, population) VALUES ('New York', 8550000);
INSERT INTO cities(name, population) VALUES ('Edinburgh', 464000);
INSERT INTO cities(name, population) VALUES ('Berlin', 3671000);