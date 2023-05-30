ARG NODE_VERSION="18.16"


FROM node:${NODE_VERSION}-slim AS builder

USER node

WORKDIR /app

COPY --chown=node:node ./postcss.config.js postcss.config.js
COPY --chown=node:node ./vite.config.ts vite.config.ts
COPY --chown=node:node ./.eslintignore .eslintignore
COPY --chown=node:node ./.eslintrc.cjs .eslintrc.cjs
COPY --chown=node:node ./tsconfig.json tsconfig.json

COPY --chown=node:node ./adapters adapters
COPY --chown=node:node ./tailwind.config.js tailwind.config.js
COPY --chown=node:node ./src src

COPY --chown=node:node ./package.json package.json
COPY --chown=node:node ./yarn.lock yarn.lock

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
