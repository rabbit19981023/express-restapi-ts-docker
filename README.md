# Express-RESTfulAPI-Typescript-Docker

This is a Headless RESTful API implemented by Express.js written in TypeScript, and bundle of all them into a Docker Image.

## Technologies

- Architecture : MVC-like, RESTful API

- Language : TypeScript

- Backend : Express.js

- Database : MongoDB Atlas (host on cloud)

- Deploy : Docker

## Usage

### Config

1. Setting your environment variables in `.env` file:

    ```.env
    NODE_ENV = production

    PORT = 3000

    MONGODB_URI = <your-mongodb-connect-uri>
    ```

2. Setting your npm secret token in `.npmrc` file:

    ```.npmrc
    <your-npm-secret-token>
    ```

### Run the application via Dockerfile

1. Building a Docker Image:

    ```bash
    $ cd /path/to/express-restapi-ts-docker
    $ sudo DOCKER_BUILDKIT=1 docker build -f Dockerfile -t express-restapi-ts:latest --secret id=npmrc,src=./.npmrc --no-cache ./
    ```

Arguments explanation:

- `DOCKER_BUILDKIT=1` : enable new `--secret` command line option, it allows us to mount a local file as secret

- `--file, -f <file>` : specify which Dockerfile is going to use

- `--tag, -t <name:tag>` : name this image

- `--secret id=<alias>,src=<local_file>` : mount a local file as secret (attention : no spaces between "," !!)

- `--no-cache` : build this image without cached image layers

2. Run a Docker container based on `express-restapi-ts:latest` image:

    ```bash
    $ sudo docker run -d --name express-restapi-ts --env-file ./.env -p 3000:3000 express-restapi-ts:latest
    ```

Arguments explanation:

- `--detach, -d` : run container in background and print container ID

- `--name <name>` : name this container

- `--env, -e <env>` : set environment variable

- `--env-file <env_file>` : read in environment variables of a file

- `--publish, -p <host_port:container_port>` : mapping the PORT between host machine and container

### Run the application via Docker-Compose

1. Building a Docker image:

    ```bash
    $ cd /path/to/express-restapi-ts-docker
    $ sudo DOCKER_BUILDKIT=1 docker-compose build --no-cache
    ```

Arguments explanation:

- `DOCKER_BUILDKIT=1` : enable new `--secret` command line option, it allows us to mount a local file as secret

- `--no-cache` : build this image without cached image layers

2. Running Docker Services via Docker-Compose:

    ```bash
    $ sudo docker-compose up -d
    ```

Arguments explanation:

- `--detach, -d` : run services in background

### Check the Result

- Just check the API-endpoint in browser : `http://localhost:3000/v1/api/movies`
