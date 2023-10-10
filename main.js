const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, 'dist', 'index.html'))
}

const closeApp = () => {
    app.quit()
}

app.whenReady().then(() => {
    ipcMain.handle('exitProg', closeApp)

    ipcMain.handle('open-directory-dialog', async () => {
      const result = await dialog.showOpenDialog({
        properties: ['openDirectory']
      });

      if (!result.canceled && result.filePaths.length > 0) {
        const directoryPath = result.filePaths[0];
        const files = fs.readdirSync(directoryPath);
        const musicFiles = files.filter(file => ['.mp3', '.wav', '.flac'].some(ext => file.endsWith(ext)));
        return {
          directoryPath,
          musicFiles
        };
      }
      return null
    });

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})