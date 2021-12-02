FROM nginx 

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY container /
COPY build /usr/share/nginx/html

RUN npm install

