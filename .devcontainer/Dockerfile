FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl git bash-completion \
    nodejs npm \
 && rm -rf /var/lib/apt/lists/*
# Installer Claude Code (binaire natif) pour l'utilisateur root
RUN curl -fsSL https://claude.ai/install.sh | bash

# Ajouter Claude Code au PATH
ENV PATH="/root/.local/bin:${PATH}"

WORKDIR /workspaces
