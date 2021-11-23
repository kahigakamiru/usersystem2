
create DATABASE usersystem;



create schema normaluser;

create table normaluser.users(
    id INT IDENTITY(1,1) PRIMARY KEY,
    firstname varchar (255) NULL,
    lastname varchar (255) NULL,
    email VARCHAR (150)Unique NOT NULL,
    [password] varchar(255) NOT NULL,
     isdeleted BIT)
     
INSERT INTO normaluser.users(firstname, lastname, email, password,isdeleted)
VALUES ('jonte','salim', 'jontesalim@gmail.com', '123', '0')

