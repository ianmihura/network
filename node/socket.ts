import { io } from 'socket.io-client'

const TRACKER_URL = 'http://localhost:8333'

const socket = io(TRACKER_URL, {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    transports: ["websocket"]
})

// Bootstrap => listeners and tests
export const ioConnect = () => {
    // Error callback
    socket.on("connect_error", (err) => {
        console.log(`Connection error due to ${err.message}`);
    })

    // Listeners
    socket.on('node-connected', (nodeId) => {
        console.log(`New node connected\n  ${nodeId}`)
    })
    socket.on('node-message', (nodeId, message) => {
        console.log(`Message from ${nodeId}\n  ${message}`)
    })
    socket.on('node-block', (nodeId, block) => {
        console.log(`New block hashed by ${nodeId}\n  ${block.hash}`)
    })

    // Tests
    console.log("Connecting to tracker")
    socket.emit('join-network')
    socket.emit('message', 'test message')
}

export const emit = (type: string, ...body: any) => { socket.emit(type, ...body) }
export const onBroadcastRecieved = (type: string, callback: any) => { socket.on(type, callback) }