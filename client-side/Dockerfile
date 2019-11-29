### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /github/messaging-stompwebsocket/client-side
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /github/messaging-stompwebsocket/client-side/dist/client-side /usr/share/nginx/html
