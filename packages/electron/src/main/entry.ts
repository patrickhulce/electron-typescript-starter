import * as path from 'path'
import {app, BrowserWindow} from 'electron'
import {createLogger} from '../../../shared/src/utils/logging'
import {findFrontendDirectory} from '../utils/filesystem'

const log = createLogger('electron:main')

app.once('ready', () => {
  log.info('app is ready')
  const window = new BrowserWindow({
    show: false,
    minWidth: 600,
    minHeight: 400,
  })

  window.loadFile(path.join(findFrontendDirectory(), 'index.html'))
  window.once('ready-to-show', () => {
    log.info('app is visible')
    window.show()
  })
})
