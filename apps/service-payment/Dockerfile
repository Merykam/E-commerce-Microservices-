FROM node:20.11.0 as Developpment

WORKDIR /apps/service-payment

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev service-payment"]

