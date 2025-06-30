# GCDS API

## Docker Usage
Build and run the API in a Docker container:
```bash
docker build -t gcds-api ./api

docker run -p 8080:8080 --env-file ./api/src/.env gcds-api
```

## Running Tests
Run the automated test suite with:
```bash
npm test --prefix src
```
- Uses [Jest](https://jestjs.io/) for unit and integration testing
- Uses [supertest](https://github.com/ladjs/supertest) for HTTP endpoint assertions
