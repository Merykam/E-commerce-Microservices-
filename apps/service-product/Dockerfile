FROM node:20.10.0 

WORKDIR /apps/service-product

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build service-product

EXPOSE 3003

CMD [ "npm", "run", "service-product" ]