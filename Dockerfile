FROM node:8.9.4

WORKDIR /app

ADD . /app

RUN yarn

EXPOSE 80

CMD ["yarn", "start"]
