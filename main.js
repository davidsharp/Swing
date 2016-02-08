/* global process */
/* global __dirname */
// Define Electron Module
"use strict";

const ELECTRON      = require('electron');
const APP           = ELECTRON.app;
const BROWSERWINDOW = ELECTRON.BrowserWindow;

var path = require('path');
var mainWindow;

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception. Invetigate.');
  console.error(err.stack);
});

APP.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    APP.quit();
  }
});

APP.on('ready', function() {
  mainWindow = new BROWSERWINDOW(
    { 
      width: 1280, 
      height: 720, 
      'min-width': 1280, 
      'min-height': 720, 
      frame: false
     });
  mainWindow.loadURL('file://' + path.join(__dirname, 'assets/html/index.html'));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
