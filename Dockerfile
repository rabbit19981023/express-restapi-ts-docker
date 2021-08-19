FROM node:lts AS build
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc \
    npm ci && \
    NODE_ENV=production npm run build

FROM node:lts-alpine AS production
RUN apk add dumb-init
ARG USER=node
ENV NODE_ENV production
WORKDIR /home/${USER}/my_app
COPY --chown=${USER}:${USER} --from=build /usr/src/app/build ./
COPY --chown=${USER}:${USER} package*.json ./
RUN npm ci && \
    npm cache clean --force && \
    chown ${USER}:${USER} ./node_modules
USER ${USER}
CMD ["dumb-init", "node", "index.js"]

