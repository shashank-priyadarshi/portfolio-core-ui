#stage 1
FROM node:latest as node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx nx reset
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ssnk.in /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]