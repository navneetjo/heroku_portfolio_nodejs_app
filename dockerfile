FROM node
MAINTAINER "Navneet Joshi" <navneetjo@cybage.com>
Run mkdir -p /scr
WORKDIR /src
ADD css css
ADD mail mail
ADD public public
ADD vendor vendor
ADD appspec.yml buildspec.yml gulpfile.js install.sh package.json server.js start.sh ./
RUN echo "i am in container"

RUN npm install
CMD ["node server.js &"]
VOLUME ['./data-backup']
EXPOSE 8090
