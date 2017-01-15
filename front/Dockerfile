FROM node

MAINTAINER jsanp

COPY ./package.json /data/
WORKDIR /data/

RUN npm install -g node-static && \
    npm install

ENV PATH=/data/node_modules/.bin:$PATH
COPY . /data/app/
WORKDIR /data/app/

RUN npm run build && \
    npm run dist

EXPOSE 80

CMD "./run.sh"
