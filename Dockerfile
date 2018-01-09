FROM mhart/alpine-node:8.9.4

WORKDIR /srv
ADD . .
RUN npm install

EXPOSE 8443
CMD ["node", "server.js"]
