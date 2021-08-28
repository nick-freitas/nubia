FROM node:alpine

WORKDIR /app
COPY package.json .
COPY decorate-angular-cli.js .
RUN yarn
COPY . .

CMD ["yarn", "run", "dev:ssr"]