import {app, BrowserWindow} from 'electron'
import {createLogger} from '../../../shared/src/utils/logging'
import {ComlinkTarget} from '../../../shared/src/utils/comlink-electron'
import {createWorker, initIpcRouter} from './ipc-router'
import {ServerWorker} from '../worker/server/server'

const log = createLogger('electron:main')

app.once('ready', async () => {
  log.info('app is ready')
  initIpcRouter()
  const serverWorker = await createWorker<ServerWorker>(ComlinkTarget.ServerWorker)
  const {port} = await serverWorker.startServer()

  const window = new BrowserWindow({
    show: false,
    minWidth: 600,
    minHeight: 400,
  })

  window.loadURL(`http://localhost:${port}/static/`)
  window.once('ready-to-show', () => {
    log.info('app is visible')
    window.show()
  })
})
