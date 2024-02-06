FROM node:20.10.0 as Developpment

WORKDIR /apps/service-cart

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3005

CMD ["npm", "run", "service-cart"]

