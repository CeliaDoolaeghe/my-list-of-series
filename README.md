# My list of series

This project is an example of NestJS application.

We can create reviews on series through a form and list them all through swagger.

It provides an example of implementation for these concepts:
- Nest Module
- Controller and body validation
- Swagger
- Interface
- Unit tests
- Security and Basic Authentication

## Pre-requisites

Data is stored in a MongoDB database. You need to install MongoDB locally or through docker, and have it running on port 27017.

## Run

Run with:

```shell
npm start
```

Or with hot reload for development:

```shell
npm run start:dev
```

Launch tests with :

```shell
npm test
```

## Use

In your browser:

Go to http://localhost:3000/swagger to use Swagger.

Go to http://localhost:3000/interface to use the form to create a review.
