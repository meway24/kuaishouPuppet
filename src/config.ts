import {
  FileBox,
}             from 'wechaty-puppet'

export const CHATIE_OFFICIAL_ACCOUNT_QRCODE = 'http://weixin.qq.com/r/qymXj7DEO_1ErfTs93y5'

export function qrCodeForChatie (): FileBox {
  return FileBox.fromQRCode(CHATIE_OFFICIAL_ACCOUNT_QRCODE)
}
export const config = {
  host: '192.168.3.37',
  port: 3000,
}
export { VERSION } from './version'
