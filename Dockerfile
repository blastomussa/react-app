# build after `npm run-script build`
FROM node:18.11

RUN mkdir /app

WORKDIR /app

RUN npm install -g serve

COPY . /app

EXPOSE 3000

CMD [ "serve", "-s",  "build" ]

# TO TEST
# docker build -t reactimage .
# docker run -d --name mycontainer -p 80:3000 reactimage
# TO PUSH TO DOCKERHUB
# docker tag reactimage blastomussa/frontend-react-app
# docker push blastomussa/frontend-react-app
# TO SHELL INTO POD
# kubectl exec -it {POD_NAME} -- /bin/bash