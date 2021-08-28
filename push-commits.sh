#!/bin/bash

# Services
cd ./api-gateway
git push
cd ../auth
git push
cd ../gamebook
git push
cd ../library
git push
cd ../chapter
git push
cd ../progression
git push
cd ../reading-session
git push
cd ../web-editor
git push
cd ../web-reader
git push

# root
cd ../
git push

