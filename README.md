# SovTech Technical Assessment

## The Chuckle Generator
A Single Page Application that displays Chuck Norris jokes using chucknorris.io

# Tech Stack

- Docker
- NodeJS
- TypeScript
- GraphQL

### Server
- ApolloServer
- TypeGraphql
- Axios

### Client
- ReactJS (16.12)
- Redux (with redux-sauce and redux-saga)
- Apollo Boost


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
cd client && npm run dev
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

### Docker troubleshooting
- `Bind for 0.0.0.0:<PORT> failed: port is already allocated` - try this:
Note that this app runs on ports 4000 and 5000.
```$xslt
kill $(lsof -t -i:5000)
kill $(lsof -t -i:4000)
```

-  Cannot create container
This app will run two containers, namely `chucklegen-server` and `chucklegen-app`
```$xslt
docker stop chucklegen-server && docker rm chucklegen-server
docker stop chucklegen-app && docker rm chucklegen-app
```






