FROM node:20.10.0 as Developpment

WORKDIR /apps/service-order

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:dev service-order"]