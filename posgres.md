
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    todo TEXT NOT NULL,
    user_id INTEGER REFERENCES "user" (id)
);

-- 

INSERT INTO "user" (role)
VALUES ('admin');

SELECT * FROM "user";

INSERT INTO todo (todo, user_id)
VALUES ('Complete project report', 1);

SELECT * FROM todo;

--

DELETE FROM "user"
WHERE id = 1;

--

CREATE ROLE admin;
CREATE ROLE member;

UPDATE auth.users
SET role = 'admin'
WHERE email = 'racelisjk@gmail.com';

select
  *
from
  auth.users;

GRANT INSERT, UPDATE, DELETE, SELECT ON ALL TABLES IN SCHEMA public TO admin;