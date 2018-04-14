const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let window;

function createWindow() {

    // 创建窗口
    window = new BrowserWindow({width: 1280, height: 720});

    // 加载index.html作为主页
    window.loadURL(url.format({pathname: path.join(__dirname, 'index.html'), protocol: 'file:', slashes: true}));

    // 允许使用开发者工具调试页面
    window.webContents.openDevTools();

    window.on('closed', () => {
        window = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

    // 哈哈，苹果梗。MacOS上，除非用户明确的使用 Cmd + Q退出，否则绝大部分应用及其菜单栏会保持激活
    if(process.platform != 'darwin') {
        app.quit();
    }

});

app.on('activate', () => {

    // 还是一个苹果梗。在MacOS上，当单击Dock图标并且没有其他串钩打开时，通常在应用程序中重新创建一个窗口
    if(null === window) {
        createWindow();
    }
})