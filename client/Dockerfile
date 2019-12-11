FROM node:12.9.1

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g serve

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
EXPOSE 8080

CMD [ "serve", "-s", "build", "-l", "80" ]