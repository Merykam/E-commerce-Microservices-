FROM node:20.10.0 

WORKDIR /apps/service-payment

COPY package*.json ./

RUN npm install

COPY . .
 
RUN npm run build service-payment

EXPOSE 3004

CMD ["npm", "run", "start:dev service-payment"]

