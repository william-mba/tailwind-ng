FROM ubuntu:22.04 AS base

RUN apt update && \
  apt install -y curl && \
  apt clean

FROM base AS setup-node
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash && \
  apt install -y nodejs && \
  apt clean

# Install Angular CLI globally
RUN npm add -g @angular/cli

FROM setup-node AS install-deps

WORKDIR /_work

COPY angular.json .
COPY .prettierignore .
COPY eslint.config.js .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY vitest.config.ts .
COPY vitest.setup.ts .
RUN npm ci

FROM install-deps AS copy-project
COPY packages/core ./packages/core

FROM copy-project AS run-style-guidelines
RUN npx run-p format:check lint:core

FROM run-style-guidelines AS run-tests
RUN npx run-p test:core:ci coverage

FROM run-tests AS run-build
RUN npm run build:core

FROM scratch AS extract-artifacts
COPY --from=run-tests /_work/reports/. /reports/
COPY --from=run-tests /_work/coverage/. /coverage/
COPY --from=run-build /_work/dist/core/. /artifacts/core/
