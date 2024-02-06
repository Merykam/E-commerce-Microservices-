FROM node:20.10.0 as Developpment

WORKDIR /apps/service-order

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build service-order

# RUN npx prisma generate

# EXPOSE 4000

# RUN apt-get update -y && apt-get install -y openssl

# CMD ["npm", "run", "start:dev service-order"]
FROM node:20.10.0 as Production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /service-order

COPY package*.json ./

RUN npm install --only=production

COPY --from=Developpment /apps/service-order/dist ./dist

RUN apt-get update -y && apt-get install -y openssl

CMD ["node", "dist/main"]