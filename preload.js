const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('API', {
    testFunc: () => {
        let data = 'Das ist ein test';
        return data;
    },
    exitProg: () => {
        ipcRenderer.invoke('exitProg')
    },
    selectDirectory: async () => {
        return ipcRenderer.invoke('open-directory-dialog');
    }
});