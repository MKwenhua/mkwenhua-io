FROM node:8
WORKDIR /app
COPY package.json /app
COPY webpack.config.js /app
RUN npm install
COPY . /app
CMD npm run start
EXPOSE 8443
