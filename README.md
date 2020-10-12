# Node Recipes app
Simple project to get recipes from Recipe Puppy API.

## Basic environment
### Dependencies
Install yarn dependency package manager following the
[official documentation](https://classic.yarnpkg.com/en/docs/install/).

To install the dependencies, run `yarn install`

### Environment variables
* RECIPE_PUPPY_API_URL: endpoint to Recipe Puppy API
* GIPHY_API_URL: endpoint to Giphy API
* GIPHY_API_KEY: key to access the Giphy. You need roll up in https://developers.giphy.com/
* APP_API_URL: the default endpoint. For example, in the local environment the value is http://localhost:3333

### Running
To execute the project, run `yarn dev:server`

### Unit tests
To execute the unit tests, run `yarn test`

## Docker
If you rather you can use docker to run the project.

### Build docker image
To build image, run `docker-compose build --no-cache`

### Running the image
To execute the project run `docker-compose up`