#!/usr/bin/env bash
set -e;

echo "jscs v`jscs --version`";
jscs lib tests bin;

echo;

echo "eslint `eslint --version`";
eslint lib tests bin;
echo "No code lint issues found.";

echo
echo "Running unit tests..."
echo "mocha v`mocha --version`";

mocha tests/*-spec.js
