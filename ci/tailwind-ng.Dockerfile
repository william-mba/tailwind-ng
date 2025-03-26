FROM ubuntu:22.04 AS base

RUN apt update && \
  apt install -y curl jq libicu70 xorg xvfb gtk2-engines-pixbuf dbus-x11 && \
  apt clean

FROM base AS setup-node
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash && \
  apt install -y nodejs && \
  apt clean

# Disable corepack
RUN corepack disable

# Reinstall corepack
RUN npm install -g corepack

# Enable corepack and use it to enable pnpm
RUN corepack enable && \
  corepack prepare pnpm@latest --activate

# Install Angular CLI globally
RUN npm add -g @angular/cli

FROM setup-node AS install-deps

WORKDIR /_work

COPY angular.json .
COPY .prettierrc .
COPY eslint.config.js .
COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json .
RUN pnpm install

FROM install-deps AS copy-project
COPY projects/tailwind-ng-core ./projects/tailwind-ng-core
COPY projects/tailwind-ng ./projects/tailwind-ng

FROM copy-project AS check-code-style
RUN pnpm code-style:check

FROM check-code-style AS run-lint
RUN pnpm lint:lib

FROM run-lint AS run-tests
RUN pnpm install-chrome && pnpm test:lib:ci

FROM run-tests AS run-build
RUN pnpm build:lib

FROM scratch AS extract-artifacts
COPY --from=run-tests /_work/junit/tailwind-ng/. /junit/tailwind-ng/
COPY --from=run-tests /_work/coverage/tailwind-ng/. /coverage/tailwind-ng/
COPY --from=run-build /_work/dist/tailwind-ng/. /artifacts/tailwind-ng/
