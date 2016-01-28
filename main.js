// Define Electron Module
"use strict";

const ELECTRON      = require('electron');
const APP           = ELECTRON.app;
const BROWSERWINDOW = ELECTRON.BrowserWindow;

var MainWindow;



APP.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    APP.quit();
  }
});

APP.on('ready', function() {
  MainWindow = new BROWSERWINDOW({ width: 1280, height: 720 });
  MainWindow.on('closed', function() {
    MainWindow = null;
  });
});
