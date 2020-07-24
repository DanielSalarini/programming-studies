const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitles', [
        { name: 'i', amount: 1234 },
        { name: 'you', amount: 900 },
        { name: 'he', amount: 853 },
        { name: 'she', amount: 1234 },
        { name: 'we', amount: 900 },
        { name: 'they', amount: 853 },
    ])
})