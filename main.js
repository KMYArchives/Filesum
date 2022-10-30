const {
	app, 
	ipcMain, 
	BrowserWindow
} = require('electron')

var mainWindow, 
	passWindow, 
	aboutWindow,
	linksWindow, 
	sumixWindow, 
	configsWindow

Window = (params) => {
	return new BrowserWindow({
		x: params.x || '',
		y: params.y || '',
		width: params.width,
		height: params.height,
		title: params.title || '',
		frame: params.frame || false,
		opacity: params.opacity || 1,
		modal: params.modal || false,
		parent: params.parent || null,
		center: params.center || true,
		movable: params.movable || true,
		minWidth: params.minWidth || '',
		maxWidth: params.minWidth || '',
		minHeight: params.minHeight || '',
		maxHeight: params.minHeight || '',
		closable : params.closable || true,
		hasShadow: params.hasShadow || true,
		focusable : params.focusable || true,
		resizable: params.resizable || false,
		show: params.show ? params.show : false,
		skipTaskbar: params.skipTaskbar || false,
		transparent: params.transparent || false,
		alwaysOnTop : params.alwaysOnTop || false,
		icon: params.icon || './assets/imgs/icon.png',
		backgroundColor: params.backgroundColor || '',
		fullscreenable: params.fullscreenable || false,
		useContentSize: params.useContentSize || false,
		autoHideMenuBar: params.autoHideMenuBar || true,

		webPreferences: {
			preload: params.preload || null,
			sandbox: params.sandbox || false,
			allowpoup: params.allowpoup || false,
			webSecurity: params.webSecurity || true,
			nodeIntegration: params.nodeIntegration || true,
			contextIsolation: params.contextIsolation || false,
			enableRemoteModule: params.enableRemoteModule || true,
			allowRunningInsecureContent: params.allowRunningInsecureContent || false,
		}
	})
}

createWindow = () => {
	mainWindow = Window({
		width: 480,
		height: 560,
		frame: true,
		resizable: false,
		maximizable: false,
	})

	mainWindow.loadFile('pages/index.html')
	mainWindow.once('ready-to-show', e => {
		mainWindow.show()
		mainWindow.webContents.openDevTools()
	})

	mainWindow.removeMenu()
	mainWindow.setMenuBarVisibility(false)
	mainWindow.on('closed', e => mainWindow = null)
}

all_ipc_functions = () => {
	// Main window
	ipcMain.on('close-main', e => { mainWindow.close() })
	ipcMain.on('min-main', e => { mainWindow.minimize() })
}

app.whenReady().then( e => {
	createWindow()
	all_ipc_functions()

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})