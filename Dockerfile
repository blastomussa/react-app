FROM node:18.11

RUN mkdir /app

# Create app directory
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]

# TO TEST
# docker build -t reactimage .
# docker run -d --name mycontainer -p 80:3000 reactimage
# docker tag reactimage blastomussa/frontend-react-app
# docker push blastomussa/frontend-react-app