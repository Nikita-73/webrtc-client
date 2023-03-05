import {io} from 'socket.io-client'

const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transport: ['websocket'],
}

const socket = io('wss://192.168.0.141:3001', options)
export default socket