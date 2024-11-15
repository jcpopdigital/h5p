#!/bin/bash

# scripts/deploy.sh
set -e

# Variables
REPO_URL=$(git config --get remote.origin.url)
BRANCH="gh-pages"

# Build
npm run build

# Deploy
cd dist
git init
git add -A
git commit -m 'Deploy to GitHub Pages'
git push -f $REPO_URL main:$BRANCH

cd -