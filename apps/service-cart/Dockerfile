FROM node:20.10.0 as Developpment

WORKDIR /apps/service-cart

COPY package*.json ./

COPY apps/service-cart/prisma ./prisma

RUN npm install
RUN npm install
RUN npm install prisma
RUN npx prisma migrate
RUN npx prisma generate
RUN npm install prisma --save-dev
RUN npx prisma migrate
RUN npm install @prisma/client

COPY . .

RUN npm run build

COPY . .
 
RUN npm run build service-payment

EXPOSE 9000

CMD ["npm", "run", "service-cart"]

