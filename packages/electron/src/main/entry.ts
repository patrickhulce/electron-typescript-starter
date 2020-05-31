import {app, BrowserWindow} from 'electron'

app.once('ready', () => {
  const window = new BrowserWindow({
    show: false,
    minWidth: 600,
    minHeight: 400,
  })

  window.loadURL('data:text/html;<!DOCTYPE html><h1>Hello World')
  window.once('ready-to-show', () => window.show())
})
