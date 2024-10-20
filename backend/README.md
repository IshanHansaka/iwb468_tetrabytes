## Set up

1. Clone the project 

```
$ git clone https://github.com/IshanHansaka/iwb468_tetrabytes.git
```

2. Add a new file named `Config.toml` in the `/backend` directory and add the following configurations for the MySQL server.

```
host = "<Database Host>"
port = <Database Port>
user = "<Username of MySQL user>"
password = "<Password of MySQL user>"
database = "<database name>"
```

3. Run the following SQL query to create a new database in the MySQL server.

```
CREATE DATABASE <database name>;
```

4. Run the SQL scripts `backend/resources/laptop_db.sql` to create the tables and insert data into the tables in the MySQL database.

5. Open a new Terminal in the project path and run the Ballerina service

```
$ cd backend
$ bal run
```
