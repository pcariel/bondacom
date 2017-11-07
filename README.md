# Bondacom - API Weather

## Feactures
- [x] Wrapper class ApiXu - "http://api.apixu.com/v1/
- [x] Jobs update Weather
- [x] API /GET Current and /GET History
- [x] APIRequest Client
- [x] MongoDB Weather
- [x] Test Mocha

## Install - ArchLinux
```shell
sudo pacman -S mongodb
sudo pacman -S nodejs npm
export MONGODB_CONNECT="mongodb://localhost/bondacom"
export APIXU_KEY="KEYY"

mongo
use bondacom

cd project
npm install
```
## Run Server
```bash
cd project
npm start #Mode Dev
npm run serve:prod #mod Prod
```

## Test
```bash
cd project
npm test
```