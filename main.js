/*
const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
    app.quit();
});

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 960, height: 660 });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
app.on('ready', createWindow);

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
*/


var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.Server(app);

const PORT = process.env.PORT || 5000

app.use('/static', express.static(__dirname + '/static'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/js/enemies', express.static(__dirname + '/js/enemies'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));

});
// Starts the server.
server.listen(PORT, function() {
  console.log('Starting server on port ' + PORT + '; press Ctrl-C to terminate.');
});



