FROM httpd:2.4.51-alpine

LABEL maintainer="Hamza ESSID <eshamza2212@gmail.com>"

ADD dist/formation-docker/ /usr/local/apache2/htdocs/
