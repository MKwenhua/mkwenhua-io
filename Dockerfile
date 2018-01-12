FROM node:9.3.0

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD yarn start
