# About Cheeseria Server

This is the Cheeseria API server - a Node.js app generated using the [Nest](https://github.com/nestjs/nest) framework.
CRUD for Cheeses were generated using [Nest CRUD generator](https://docs.nestjs.com/recipes/crud-generator).
Swagger module was added by following the [NestJS recipes documentation](https://docs.nestjs.com/openapi/introduction).

## Installation:

```bash
$ npm install
```

## Running the app:

```bash
# development
$ npm run start
```

Open [http://localhost:3000/api](http://localhost:3000/api) to view the Swagger UI in your browser.

## To run the app in the Docker container:

Build the Docker image:

```
docker build -t cheeseria-server-prod .
```

Run the Docker image:

```
docker run -p 3000:3000 -it cheeseria-server-prod
```

Open [http://localhost:3000/api](http://localhost:3000/api) to view the Swagger UI in your browser.

## To run the app in the Docker container using docker-compose:

```
docker-compose up -d
```

Open [http://localhost:3000/api](http://localhost:3000/api) to view the Swagger UI in your browser.

## TODOs:

1. The Cheeseria API endpoints need to be protected with authentication
2. CORS is enabled, it needs to be restricted (TBC)
3. Add more unit tests
4. Cheeses are currently stored in a variable instead of a database
5. The pictures are sourced from an external location - they need to be included in the server assets.
6. Validate input for the endpoints
7. The Dockerfiles are based on online examples, more research is required
