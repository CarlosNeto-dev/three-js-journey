FROM node:alpine

WORKDIR /app

COPY install.sh /scripts/install.sh
RUN sh /scripts/install.sh

COPY entrypoint.sh /scripts/entrypoint.sh
RUN chmod +x /scripts/entrypoint.sh

ENTRYPOINT ["sh", "/scripts/entrypoint.sh"]