#!/bin/bash

#Publish
cd ./common
npm run pub

# Services
cd ../api-gateway
yarn upgrade @indigobit/nubia.common --latest
cd ../auth
yarn upgrade @indigobit/nubia.common --latest
cd ../gamebook
yarn upgrade @indigobit/nubia.common --latest
cd ../library
yarn upgrade @indigobit/nubia.common --latest
cd ../chapter
yarn upgrade @indigobit/nubia.common --latest
cd ../reading-session
yarn upgrade @indigobit/nubia.common --latest

cd ../