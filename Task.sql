DROP SCHEMA IF EXISTS Task;

CREATE SCHEMA IF NOT EXISTS Task;

CREATE TABLE To_do(
  id INTERGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  work TEXT NOT NULL,
  `status` TEXT NOT null
)

INSERT INTO
  Task (wok, `status`)
VALUES 
  ("tem que praticar o front", "feito!");

INSERT INTO
  Task (wok, `status`)
VALUES 
  ("ja fez o DUO hoje?", "pendente...");