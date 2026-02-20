ARG NODE_VERSION="24"

FROM node:${NODE_VERSION}-slim AS base


FROM base AS builder
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run build && npm prune --omit=dev


FROM base AS release
WORKDIR /app
USER node

COPY --chown=node:node --from=builder /build/node_modules node_modules
COPY --chown=node:node --from=builder /build/package.json package.json
COPY --chown=node:node --from=builder /build/.wrangler .wrangler
COPY --chown=node:node --from=builder /build/server server
COPY --chown=node:node --from=builder /build/dist dist

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "npm", "run", "serve" ]
