CREATE TABLE greetings (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL
);

INSERT INTO greetings (message) VALUES ('Hello from PostgreSQL!');
