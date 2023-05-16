FROM node:14.17.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD app.js ./
CMD [ "node", "app.js"]
RUN npm start