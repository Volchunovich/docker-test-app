FROM --platform=arm64 node:14.17.0-alpine3.13
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY src /app/src

RUN /usr/local//bin//npm install

EXPOSE 8080

CMD ["npm", "start"]

