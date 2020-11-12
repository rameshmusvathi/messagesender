FROM ubuntu latest
MAINTAINER rameshmusuvathi@gmail.com
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y build-essential

USER 1000
