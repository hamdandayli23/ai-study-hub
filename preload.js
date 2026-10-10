const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isDesktopApp: true,
  platform: process.platform,
  version: process.versions.electron
});
