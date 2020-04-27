create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

create table posts (
    post_id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id INT REFERENCES users(id)
);

-- alter table users
-- alter password
-- set data type text;