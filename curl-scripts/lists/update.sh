#!/bin/bash

API="http://localhost:4741"
URL_PATH="/todos"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "todo": {
      "name": "'"${TEXT}"'",
      "description": "'"${TEXT}"'",
      "date": "'"${DATE}"'",
      "location": "'"${TEXT}"'"
    }
  }'

echo
