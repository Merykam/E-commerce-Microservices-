FROM node:20.10.0

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./ 
COPY tsconfig.build.json ./ 
COPY nest-cli.json ./
RUN npm install

COPY apps/service-authentification .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]
