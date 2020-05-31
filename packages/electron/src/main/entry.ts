import {app, BrowserWindow} from 'electron'
import {createLogger} from '../../../shared/src/utils/logging'

const log = createLogger('electron:main')

app.once('ready', () => {
  log.info('app is ready')
  const window = new BrowserWindow({
    show: false,
    minWidth: 600,
    minHeight: 400,
  })

  window.loadURL('data:text/html;<!DOCTYPE html><h1>Hello World')
  window.once('ready-to-show', () => {
    log.info('app is visible')
    window.show()
  })
})
