rm -r dist/resourceServer
mkdir -p dist/resourceServer
cp -r controllers routes services utils resourceServer.js package.json dist/resourceServer
cd dist/resourceServer
zip -r app.zip *
ls | grep -v app.zip | xargs rm -r