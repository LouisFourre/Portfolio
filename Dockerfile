FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json .
RUN npm ci

COPY . .
RUN npm run portfo:build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 9605
CMD ["nginx", "-g", "daemon off;"]
