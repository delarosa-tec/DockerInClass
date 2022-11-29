FROM node:16-alpine3.15
COPY . .
RUN npm install
CMD [ "npm", "start"]
# CMD [ "node", "-r", "newrelic", "index.js"]