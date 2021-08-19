cd ./common
npm run pub
cd ../api-gateway
yarn upgrade @indigobit/nubia.common --latest
cd ../auth
yarn upgrade @indigobit/nubia.common --latest
cd ../gamebook
yarn upgrade @indigobit/nubia.common --latest
cd ../library
yarn upgrade @indigobit/nubia.common --latest
