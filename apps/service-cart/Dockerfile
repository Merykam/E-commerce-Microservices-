FROM node:20.10.0 as Developpment

WORKDIR /service-cart

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9000

RUN npm run build
