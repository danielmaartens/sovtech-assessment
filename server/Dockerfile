FROM node:12.9.1

RUN mkdir -p /server

WORKDIR /server

RUN npm i -g typescript ts-node

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "prod" ]