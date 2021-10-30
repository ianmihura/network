import { io } from 'socket.io-client'

const TRACKER_URL = 'http://localhost:8333'

const socket = io(TRACKER_URL, {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    transports: ["websocket"]
})

export const emit = (type: string, ...body: any) => { socket.emit(type, ...body) }
export const onBroadcastRecieved = (type: string, callback: any) => { socket.on(type, callback) }