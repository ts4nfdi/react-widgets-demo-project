FROM node:18-alpine

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]