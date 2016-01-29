// Define Electron Module
"use strict";

const ELECTRON      = require('electron');
const APP           = ELECTRON.app;
const BROWSERWINDOW = ELECTRON.BrowserWindow;

var path = require('path');
var MainWindow;


APP.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    APP.quit();
  }
});

APP.on('ready', function() {
  MainWindow = new BROWSERWINDOW({ width: 1280, height: 720, frame: false });
  MainWindow.loadURL('file://' + path.join(__dirname, 'assets/html/index.html'));
  MainWindow.webContents.openDevTools();
  MainWindow.on('closed', function() {
    MainWindow = null;
  });
});
