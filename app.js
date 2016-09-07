const electron = require('electron');
// module that controls app lifecycle
const {app} = electron;
// module to create native window
const {BrowserWindow} = electron;

// global window reference
let win


/* HANDLE STAGES OF APPLICATION LIFECYCLE */

// [BEFORE READY]
app.on('will-finish-launching', createPseudoServer);

// [READY]
app.on('ready', createWindow);

// [CLOSE ALL WINDOWS]
app.on('window-all-closed', windowsAllClosed);

// [RE-OPEN]
app.on('activate', onActivate);


/* HELPER FUNCTIONS */

function createWindow() {
	// create new draggable window
	win = new BrowserWindow({
    title: 'Braxton\'s Code2040 Application',
    minHeight: 500,
    minWidth: 500,
    width: 800,
    height: 500,
    maxWidth: 800,
    maxHeight: 500,
    titleBarStyle: 'hidden-inset',
  });

  // load app view
  win.loadURL(`file://${__dirname}/app/app.html`);

  console.log(win);

  // handle close
  win.on('closed', function() {
  	// dereference global win & allow garbage collection
  	win = null;
  });
};

function onActivate() {
	// app has been opened via dock click
	if (win == null) {
		createWindow();
	}
};

function windowsAllClosed() {
	// MAC OS X -- keep applications open unless 'Cmd + Q'
	if (process.platform !== 'darwin') {
		app.quit();
	}
};

function createPseudoServer() {
	// TODO require file that makes API request;
	console.log('server started');
};