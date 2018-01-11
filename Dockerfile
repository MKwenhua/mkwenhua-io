FROM node:9

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD yarn start
