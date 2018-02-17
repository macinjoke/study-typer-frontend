FROM node:8.9.4

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 80

CMD ["npm", "start"]
