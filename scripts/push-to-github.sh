#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Usage: bash scripts/push-to-github.sh YOUR_GITHUB_USERNAME"
  exit 1
fi

USERNAME="$1"
REPO="roastery-premium-theme"

if [ ! -d .git ]; then
  git init
fi

git add .
git commit -m "Initial Roastery Premium Salla theme" || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USERNAME}/${REPO}.git"
git push -u origin main
