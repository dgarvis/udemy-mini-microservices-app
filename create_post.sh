#!/bin/sh

curl -X POST $1/posts \
   -H 'Content-Type: application/json' \
   -d '{"title":"A Post Title"}'
