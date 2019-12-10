# SovTech Technical Assessment

## The Chuckle Generator
A Single Page Application that displays Chuck Norris jokes using chucknorris.io

This app was written using Mobile First principles.

# Tech Stack

- Docker
- NodeJS (12.9)
- TypeScript
- GraphQL
- ReactJS (16.12)
- Apollo
- Redux

### Server
- ApolloServer
- TypeGraphQL
- Axios

### Client
- ReactJS (16.12)
- Redux (with redux-sauce and redux-saga)
- Apollo Boost
- GraphQL


## Assumptions
- No additional assumptions were considered as the spec was not ambiguous.

# Running the application

### Docker
#### Using Scripts (Unix Only)
**NB:** Ensure that you have Docker installed before using the following commands.

All sets of commands start from the root directory.

A script is provided that launches the app in a docker container:

```
sh run.sh
```

#### Without Scripts
```
docker network create --subnet=172.7.0.0/16 chucklenet 2>/dev/null
cd client
docker build -t chucklegen/app .
cd ../server
docker build -t chucklegen/server .
cd ..
docker-compose up -d
```

### Without Docker
``` 
npm install -g typescript node-ts serve
cd client && npm install
cd ../server && npm install
```
#### Development
##### App
```
cd client && npm run start
```
##### Server
```
cd server && npm run dev
```

### Production
##### App
```
cd client && npm run prod
```
##### Server
```
cd server && npm run prod
```








