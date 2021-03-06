# Express-RESTfulAPI-Typescript-Docker

This is a Headless RESTful API implemented by Express.js written in TypeScript, and bundle of all them into a Docker Image for production.

## Technologies

- Architecture : MVC-like, RESTful API

- Language : Node.js, TypeScript

- Backend : Express

- Database : MongoDB Atlas (host on cloud)

- Deploy : Docker

## Usage

### Config

1. Setting environment variables in `.env` file:

    ```.env
    NODE_ENV=production
    PORT=<server-port>
    MONGODB_URI=<your-mongodb-connect-uri>
    ```

2. Setting npm secret token in `.npmrc` file:

    ```.npmrc
    <your-npm-secret-token>
    ```

### 1. Run the application via Dockerfile

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
    $ sudo docker run --rm -d --name express-restapi-ts --env-file ./.env -p 80:<server-port> express-restapi-ts:latest
    ```

    Arguments explanation:

    - `--rm` : Automatically remove the container when exits it

    - `--detach, -d` : run container in background and print container ID

    - `--name <name>` : name this container

    - `--env, -e <env>` : set environment variable

    - `--env-file <env_file>` : read in environment variables of a file

    - `--publish, -p <host_port>:<container_port>` : mapping the PORT between host machine and container

### 2. Run the application via Docker-Compose

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

## Send requests to server

- Create a new movies API:

    ```bash
    $ curl --request POST --data "name=????????????&director=?????????&language=?????????&duration=125" http://localhost/api/v1/movies

    {"status":200,"message":"You have added a new movie successfully!","added_movie":{"_id":"611e611a28c30b0008ca4a59","name":"????????????","director":"?????????","language":"?????????","duration":125,"__v":0}}
    ```

- Get all movies API:

    ```bash
    $ curl --request GET http://localhost/api/v1/movies

    [{"_id":"611e5d06b7d435000785e83a","name":"????????????","director":"?????????","language":"?????????","duration":126,"__v":0},{"_id":"611e611a28c30b0008ca4a59","name":"????????????","director":"?????????","language":"?????????","duration":125,"__v":0}]
    ```
