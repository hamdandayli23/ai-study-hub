const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let mainWindow = null;

// Enforce single instance lock
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1300,
      height: 880,
      minWidth: 420,
      minHeight: 620,
      center: true,
      backgroundColor: '#090d16',
      title: 'AI Study Assistant - Intelligent Workspace',
      icon: path.join(__dirname, 'icons', 'icon-512.png'),
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: false,
        spellcheck: false
      },
      show: false // Show gracefully once loaded
    });

    // Load local web app
    mainWindow.loadFile('index.html');

    // Show gracefully once ready
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    });

    // Handle external web links in system browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('http:') || url.startsWith('https:')) {
        shell.openExternal(url);
        return { action: 'deny' };
      }
      return { action: 'allow' };
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
