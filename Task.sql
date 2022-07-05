DROP SCHEMA IF EXISTS Task;

CREATE SCHEMA IF NOT EXISTS Task;

CREATE TABLE Task.To_do(
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 `work` TEXT NOT NULL,
  `status` TEXT NOT NULL
);

INSERT INTO
  Task.To_do (`work`, `status`)
VALUES 
  ("tirar o lixo", "feito!");

INSERT INTO
  Task.To_do (`work`, `status`)
VALUES 
  ("praticar o ingles com DUO", "pendente")
  
 