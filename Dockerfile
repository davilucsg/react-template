FROM node:13-alpine as build-env
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn --frozen-lockfile --no-cache
RUN yarn build

FROM nginx:1.17.9-alpine

COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d/
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
EXPOSE 80 8080

CMD ["nginx", "-g", "daemon off;"]
