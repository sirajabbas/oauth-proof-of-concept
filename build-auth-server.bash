rm -r dist/authServer
mkdir -p dist/authServer
cp -r controllers routes services utils authServer.js package.json dist/authServer
cd dist/authServer
zip -r app.zip *
ls | grep -v app.zip | xargs rm -r