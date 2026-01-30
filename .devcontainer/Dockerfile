FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

ARG HUGO_VERSION=0.151.0

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl git bash-completion \
    golang-go \
    nodejs npm \
 && npm install -g \
    tailwindcss \
    @tailwindcss/cli \
    @tailwindcss/forms \
    @tailwindcss/typography \
    tailwind-bootstrap-grid \
 && rm -rf /var/lib/apt/lists/*

# hugo extended
RUN set -eux; \
    arch="$(dpkg --print-architecture)"; \
    case "$arch" in \
      amd64)  hugo_arch="linux-amd64" ;; \
      arm64)  hugo_arch="linux-arm64" ;; \
      *) echo "Unsupported arch: $arch" >&2; exit 1 ;; \
    esac; \
    curl -fsSL -o /tmp/hugo.tar.gz \
      "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_${hugo_arch}.tar.gz"; \
    tar -C /usr/local/bin -xzf /tmp/hugo.tar.gz hugo; \
    rm -f /tmp/hugo.tar.gz; \
    hugo version; \
    go version

WORKDIR /workspaces
