FROM node:20.10.0 

WORKDIR /apps/service-product

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "run", "service-product" ]
