# Electron Hello World!

## Prerequisites
1. Nodejs Version >= 6.x
2. A Code editor like VS Code :)

----

## Getting Start
1. Clone this repository, then execute `cd electron-helloworld && npm install` install all the dependencies
2. Open the folder with VS Code
3. Press Keyboard Shortcut `Ctrl + Shift + D` open the Debug Panel
4. Beside the debug button, expand the configuration list, then choose the **Add Configuration**. in the configuration file opened in workspace, setting as below: 
```
{
    "version":"0.2.0",
    "configurations": [
        {
            "name": "Configuration name",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable" "${workspaceRoot}/node_modules/.bin/electron",
            "windows": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
            }
            "args": ["."]
        }
    ]
}
```

> For more information, visit [Electron Example](http://https://electronjs.org/docs/tutorial/first-app)