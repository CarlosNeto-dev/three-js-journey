FROM node:alpine

WORKDIR /app

COPY install.sh .
RUN sh install.sh

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["sh", "entrypoint.sh"]
