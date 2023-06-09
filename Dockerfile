ARG NODE_VERSION="18.16"

FROM node:${NODE_VERSION}-slim AS base


FROM base AS dependencies
WORKDIR /build

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN --mount=type=cache,target=/var/cache/yarn yarn --production --frozen-lockfile
RUN --mount=type=cache,target=/var/cache/yarn cp -R node_modules prod_modules
RUN --mount=type=cache,target=/var/cache/yarn yarn

FROM dependencies as builder
WORKDIR /build

COPY . .

RUN --mount=type=cache,target=/var/cache/yarn yarn build


FROM base AS release
WORKDIR /app
USER node

COPY --chown=node:node --from=dependencies /build/prod_modules node_modules
COPY --chown=node:node --from=dependencies /build/package.json package.json
COPY --chown=node:node --from=builder /build/server server
COPY --chown=node:node --from=builder /build/dist dist

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "yarn", "serve" ]
