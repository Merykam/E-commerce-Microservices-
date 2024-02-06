FROM node:20.10.0 as Developpment

WORKDIR /service-cart

COPY package*.json ./

COPY apps/service-cart/prisma ./prisma

RUN npm install

COPY . .

RUN npm run build

# Generate Prisma Client
RUN npx prisma generate

RUN npx prisma migrate dev --name init



# FROM node:20.10.0 as Production

# WORKDIR /service-cart

# COPY package*.json ./

# RUN npm install --only=production

# COPY --from=Developpment /apps/service-cart/dist ./dist

# CMD ["node", "service-cart/main"]