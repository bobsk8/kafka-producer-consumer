# Microservices with kafka

## Technologies used

* Kafkajs
* Nestjs
* @nestjs/microservices
* @nestjs/config
* Mongodb
* Nodejs
* git
* Docker
* Docker-compose
* npm

## System Requirements

| Technology | Site |
| ------ | ------ |
| Git | [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] |
| Nodejs v 12.x.x | [https://nodejs.org/en/download/] |
| Nestjs v 7.x.x | [https://docs.nestjs.com/] |
| Docker v 19.x.x | [https://www.docker.com/get-started] |
| Docker-compose v 1.7.x | [https://docs.docker.com/compose/install/] |
|

---

## kafka-consumer folder organization

### Config
  
 * Responsible for maintaining global application settings. 

### Entity

* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

#### User
* Contains user module

---

## kafka-producer folder organization

#### User
* contains user module

---

## Run the application

Clone the project located in the repository of [github](https://github.com/bobsk8/kafka-producer-consumer).

```sh
$ git clone https://github.com/bobsk8/kafka-producer-consumer
```

Enter the project folder with the command
```sh
$ cd kafka-producer-consumer
```

Run background docker compose
```sh
$ sudo docker-compose up -d
```

Enter the project folder with terminal(kafka-consumer and kafka-producer)

Run consumer 
```sh
$ yarn start
```

Run producer
```sh
$ yarn start
```


## API
👉🏼 http://localhost:3000/user/
