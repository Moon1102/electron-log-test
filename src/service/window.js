const { BrowserWindow, screen } = require("electron");

export class Window {
  constructor() {}

  async create() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    let win = new BrowserWindow({
      width: Math.min(width, 1280),
      height: Math.min(height, 720),
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        nativeWindowOpen: true,
      },
      show: false,
    });

    win.loadURL("http://localhost:8080#/page1");

    win.once("ready-to-show", () => {
      win.show();
      win.webContents.openDevTools();
    });
  }
}
