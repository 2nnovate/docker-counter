FROM node:12

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./ /app/

RUN npm install
RUN npm install react-scripts@3.0.1 -g


EXPOSE 3000

CMD ["npm", "start"]
