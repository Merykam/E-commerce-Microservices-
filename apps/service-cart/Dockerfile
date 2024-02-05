FROM node:20.10.0 as Developpment

WORKDIR /service-cart

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20.10.0 as Production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /service-cart

COPY package*.json ./

RUN npm install --only=production

COPY --from=Developpment /apps/service-cart/dist ./dist

CMD ["node", "dist/main"]