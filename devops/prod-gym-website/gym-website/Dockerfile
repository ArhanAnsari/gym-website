FROM node:lts

WORKDIR /app

COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN yarn install

COPY . /app

RUN yarn run build

RUN yarn global add serve

EXPOSE 80

# Serve
ENTRYPOINT [ "serve" ]
CMD [ "-s", "build", "-p", "80"]