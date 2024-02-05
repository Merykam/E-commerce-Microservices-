FROM node:20.10.0 

WORKDIR /apps/service-payment

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm", "run", "start:dev service-payment"]

