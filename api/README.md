# GCDS API

## Running the API locally
1. Go to the `src` directory:
```bash
cd src
```
2. Install dependencies:
```bash
npm install
```
3. Optional: Create a `.env` file in the `src` directory to override default environment variables. See `.env.example` for reference.
4. Start the server:
```bash
node index.js
```
5. The API will be accessible at `http://localhost:8080`.

## Docker Usage
Build and run the API in a Docker container:
```bash
docker build -t gcds-api .

docker run -p 8080:8080 --env-file ./api/src/.env gcds-api
```

## Running Tests
Run the automated test suite with:
```bash
# inside api/src
npm run test
```
Check code coverage with:
```bash
# inside api/src
npm run test:coverage
```
- Uses [Jest](https://jestjs.io/) for unit and integration testing
- Uses [supertest](https://github.com/ladjs/supertest) for HTTP endpoint assertions
