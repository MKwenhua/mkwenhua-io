FROM node:9

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD yarn start
