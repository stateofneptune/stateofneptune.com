ARG NODE_VERSION="18.16"


FROM node:${NODE_VERSION}-slim AS builder

USER node

WORKDIR /app

COPY --chown=node:node . .

RUN yarn
RUN yarn build


FROM node:${NODE_VERSION}-slim as production

WORKDIR /app

COPY --chown=node:node --from=builder /app/package.json package.json
COPY --chown=node:node --from=builder /app/yarn.lock yarn.lock
COPY --chown=node:node --from=builder /app/dist dist
COPY --chown=node:node --from=builder /app/server server

RUN yarn --production

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "yarn", "serve" ]
