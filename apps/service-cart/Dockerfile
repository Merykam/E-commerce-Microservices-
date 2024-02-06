FROM node:20.10.0 as Development

WORKDIR /service-cart

COPY package*.json ./
COPY apps/service-payment/prisma ./prisma

RUN npm install
RUN npm install prisma
RUN npx prisma migrate
RUN npx prisma generate
RUN npm install prisma --save-dev
RUN npx prisma migrate
RUN npm install @prisma/client

COPY . .

RUN npm run build service-cart

EXPOSE 9000

CMD ["npm", "run", "service-cart"]
