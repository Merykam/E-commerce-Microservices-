FROM node:20.10.0 as Developpment

WORKDIR /apps/service-cart

COPY package*.json ./

COPY apps/service-cart/prisma ./prisma

RUN npm install

COPY . .

RUN npm run build service-cart

