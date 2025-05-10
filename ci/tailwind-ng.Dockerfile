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
COPY .prettierrc .
COPY eslint.config.js .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm ci

FROM install-deps AS copy-project
COPY projects/tailwind-ng-core ./projects/tailwind-ng-core
COPY projects/tailwind-ng-ui ./projects/tailwind-ng-ui

FROM copy-project AS check-format
RUN npm run format:fix

FROM check-format AS run-lint
RUN npm run lint:lib

FROM run-lint AS run-tests
RUN npm run test:ui:ci && npm run coverage

FROM run-tests AS run-build
RUN npm run build:lib

FROM scratch AS extract-artifacts
COPY --from=run-tests /_work/reports/. /reports/
COPY --from=run-tests /_work/coverage/. /coverage/
COPY --from=run-build /_work/dist/tailwind-ng-ui/. /artifacts/tailwind-ng-ui/
