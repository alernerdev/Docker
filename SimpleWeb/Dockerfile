# base image -- bare bones node
FROM node:alpine

# so that files copied do not end up at the root level
WORKDIR /usr/app

# copy from my machine (relative to build context) to container working directoey
COPY ./package.json ./

#install dependencies
RUN npm install

# notice that copy is done last so that changing these files does not
# affect rebuild of dependencies
COPY ./ ./

#default command
CMD ["npm", "start"]