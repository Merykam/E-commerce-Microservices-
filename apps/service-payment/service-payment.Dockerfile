FROM node:20.10.0 as Developpment

WORKDIR /apps/service-cart

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20.10.0 as Production

WORKDIR /apps/service-payment

COPY package*.json ./

RUN npm install --only=production

COPY --from=Developpment /apps/service-payment/dist ./dist

CMD ["node", "dist/main"]