# Set up local DB for development


## Up DB container
```
docker-compose up
```

## Enter into running container
```
docker exec -it mongodb bash
```

## Go to mongo shell
```
mongo -u "admin" -p "oknab" --authenticationDatabase 'admin'
```



## Commands
### Show dbs
```
show dbs
```
### Show dbs
```
show users
```
### Use some db
```
use <DB_NAME>
```
### Show collections
```
show collections
```
### Show all elements in collection
```
db.<COLLECTION_NAME>.find()
```
### Add elem to collection
```
db.<COLLECTION_NAME>.insert(<OBJ>)
```

## Links

https://stackoverflow.com/questions/60394290/mongo-db-docker-image-authentication-failed

https://docs.mongodb.com/manual/reference/mongo-shell/