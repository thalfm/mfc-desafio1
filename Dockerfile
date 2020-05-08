FROM node:14.1-alpine

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]