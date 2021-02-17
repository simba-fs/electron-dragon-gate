const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWin(){
	const mainWin = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainWin.loadFile('src/index.html');
}

app.whenReady()
	.then(createMainWin);

app.on('window-all-closed', () => {
	app.quit();
})
