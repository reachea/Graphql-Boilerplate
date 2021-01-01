### Read Me Document

#### create file .env
```
PORT=8080
DATABAE=mysql2://username:password@host/your_db_name
```

### create migrations
```
knex migrate:make add_table
```

### generate schame to database
```
knex migrate:latest
```
