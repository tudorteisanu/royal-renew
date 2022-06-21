FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN mkdir -p /usr/share/nginx/html

RUN echo  "server {" > /etc/nginx/conf.d/default.conf
RUN echo  "listen       80;" >> /etc/nginx/conf.d/default.conf
RUN echo  "listen  [::]:80;" >> /etc/nginx/conf.d/default.conf
RUN echo  "server_name  localhost;" >> /etc/nginx/conf.d/default.conf
RUN echo "    root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
RUN echo "    index  index.html;" >> /etc/nginx/conf.d/default.conf
RUN echo "    location / {" >> /etc/nginx/conf.d/default.conf
RUN echo "        try_files \$uri \$uri/ /index.html =404;" >> /etc/nginx/conf.d/default.conf
RUN echo "    }" >> /etc/nginx/conf.d/default.conf
RUN echo "}" >> /etc/nginx/conf.d/default.conf

COPY dist/ /usr/share/nginx/html
