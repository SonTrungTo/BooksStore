FROM node:10.19.0

RUN mkdir -p /usr/src/booksstore

COPY build /usr/src/booksstore/build
COPY authMiddleware.js /usr/src/booksstore/
COPY productionData.json /usr/src/booksstore/
COPY server.js /usr/src/booksstore/
COPY deploy-package.json /usr/src/booksstore/package.json

COPY serverMutationsResolver /usr/src/booksstore/