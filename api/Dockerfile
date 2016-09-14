FROM node:6.5.0-slim
RUN npm -g install forever
RUN mkdir /app
WORKDIR /app
CMD forever -w index.js --port 80 --host '0.0.0.0'
