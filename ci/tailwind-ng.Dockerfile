FROM ubuntu:22.04 AS base

RUN apt update && \
  apt install -y curl jq libicu70 xorg xvfb gtk2-engines-pixbuf dbus-x11 && \
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
RUN npm install

FROM install-deps AS copy-project
COPY projects/tailwind-ng-core ./projects/tailwind-ng-core
COPY projects/tailwind-ng ./projects/tailwind-ng

FROM copy-project AS check-format
RUN npm run format:fix

FROM check-format AS run-lint
RUN npm run lint:lib

FROM run-lint AS run-tests
RUN npm run install-chrome && npm run test:lib:ci

FROM run-tests AS run-build
RUN npm run build:lib

FROM scratch AS extract-artifacts
COPY --from=run-tests /_work/junit/tailwind-ng/. /junit/tailwind-ng/
COPY --from=run-tests /_work/coverage/tailwind-ng/. /coverage/tailwind-ng/
COPY --from=run-build /_work/dist/tailwind-ng/. /artifacts/tailwind-ng/
