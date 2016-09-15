FROM node:6.5.0-slim
RUN npm -g install forever
RUN mkdir /app
RUN mkdir /data

WORKDIR /app
#Creating Pre processed word dictionary
RUN curl https://raw.githubusercontent.com/dwyl/english-words/master/words.txt -o /data/words.txt
COPY ./scripts/wordPreProcessor.js /data/wordPreProcessor.js
RUN cd /data && npm init -y && npm install --save lodash
RUN node /data/wordPreProcessor.js

CMD forever -w index.js --port=80 --host='0.0.0.0'
