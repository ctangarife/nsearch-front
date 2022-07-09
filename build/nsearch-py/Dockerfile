FROM python:3.10.5-alpine3.16

LABEL maintainer="ctangarife" \
        description="Minimal Docker image with NSearch" \
        org.label-schema.url="" \
        org.label-schema.vcs-url="" \
        org.label-schema.vcs-type=""

RUN apk add --no-cache bash git openssh vim
RUN apk add --no-cache python3-dev libstdc++ 
RUN apk add --no-cache g++
RUN apk add --no-cache gcc wget \ 
        python3-dev musl-dev libc-dev libc6-compat \
        linux-headers build-base git libffi-dev openssl-dev \
        nmap nmap-scripts
RUN apk add --virtual build-dependencies build-base
RUN apk add --no-cache unzip readline-dev \
        sqlite-libs mariadb-dev postgresql-dev sqlite-dev
RUN apk add --no-cache tzdata
RUN ln -s /usr/include/locale.h /usr/include/xlocale.h
RUN cp -r -f /usr/share/zoneinfo/America/Bogota /etc/localtime
RUN rm -rf /var/cache/apk/*


WORKDIR /var/www/pre

# ADD ./build/nsearch/config.yaml /var/www/pre/scripts/config.yaml
ADD ./build/nsearch-py/requirements.txt /var/www/pre/requirements.txt
RUN pip install --upgrade pip

RUN pip install -r requirements.txt

WORKDIR /var/www/nsearch

# RUN sh install.sh

#RUN echo 'alias nsearch="python /var/www/nsearch/nsearch.py"' >> ~/.bashrc

WORKDIR /var/www/

RUN rm -rf pre

WORKDIR /var/www/brief-back

#CMD ["tail","-f","/dev/null"]