FROM node:16.14-alpine AS backend

WORKDIR /mks-challenge/src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3005

CMD ["npm", "run", "start"]
