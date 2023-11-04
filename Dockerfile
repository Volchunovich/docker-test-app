FROM node:16-alpine
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY src /app/src

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]

