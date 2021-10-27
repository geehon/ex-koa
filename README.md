# An example base on Koa2

![](https://img.shields.io/badge/ex--koa-V%200.0.1-blue?style=flat-square)
![](https://img.shields.io/badge/node-%3E%3D8.0.0-brightgreen?style=flat-square)
![](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

## Links

- [koa-route](https://github.com/ZijianHe/koa-route)
- [require-directory](https://github.com/troygoode/node-require-directory)

## Debug with vscode

create `launch.json` file:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "console": "integratedTerminal",
            "name": "nodemon",
            "program": "${workspaceFolder}\\index.js",
            "request": "launch",
            "restart": true,
            "internalConsoleOptions": "neverOpen",
            "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
            "skipFiles": [
                "<node_internals>/**",
                "${workspaceFolder}/node_modules/**"
            ]
            
        }
    ]
}
```
