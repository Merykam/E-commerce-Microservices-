FROM node:20.10.0 

WORKDIR /apps/service-order

COPY package*.json ./

COPY apps/service-order/prisma ./prisma
COPY apps/service-order/src/prisma ./src/prisma


RUN npm install
RUN npm install prisma
RUN npx prisma migrate
RUN npx prisma generate
RUN npm install prisma --save-dev
RUN npx prisma migrate
RUN npm install @prisma/client

COPY . .
 
RUN npm run build service-order

EXPOSE 4000

CMD ["npm", "run", "start:dev service-order"]