FROM node
# FROM keymetrics/pm2:latest-alpine


ADD . /web/

WORKDIR /web/

RUN npm install -g pm2 --registry https://registry.npm.taobao.org \
    && npm install esbuild-linux-64 --registry https://registry.npm.taobao.org

CMD [ "./start.sh"  ]
