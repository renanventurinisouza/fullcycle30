FROM nginx:latest

RUN apt-get update
RUN apt-get install vim -y

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

#ENTRYPOINT ["/docker-entrypoint.sh"]
#CMD ["nginx", "-g", "daemon off"]