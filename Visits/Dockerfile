FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

# notice file copying is last
COPY . .

CMD ["npm", "start"]