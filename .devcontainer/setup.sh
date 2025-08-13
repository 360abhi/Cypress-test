#!/usr/bin/env bash
set -e

# Install Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt-get update
apt-get install -y \
    ./google-chrome-stable_current_amd64.deb \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2t64 \
    libxshmfence-dev \
    libxrandr2 \
    libxdamage1 \
    libatk1.0-0t64 \
    libatk-bridge2.0-0t64 \
    libcups2t64 \
    libdrm2 \
    libxcomposite1 \
    libxcursor1 \
    libxinerama1 \
    xvfb

# Install project dependencies
npm install
