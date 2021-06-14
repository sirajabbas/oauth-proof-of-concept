# OAuth workflow Proof of concept


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a sample project which demonstrates the concept of OAuth workflow


- The database functions are mimicked using simple ```setTimeout``` function
- See HTML in the right
- ✨Magic ✨

## RUN SERVER

```sh
./runAuthServer.bash --authorization server
./runResourceServer.bash  --resource server
```

## BUILD SERVER
```sh
./build-auth-server.bash
./build-resource-server.bash
```

The request body of login api in the authServer should contain the scope **LIBRARY**
The resource server api's expect to include the claim **LIBRARY** in the auth header


## License

MIT

**Free Software, Hell Yeah!**
