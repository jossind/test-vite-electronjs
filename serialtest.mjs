/* eslint-disable prettier/prettier */
import { SerialPort } from 'serialport'

const port = new SerialPort({
  path: 'COM3',
  baudRate: 9600
})
