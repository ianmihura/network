import { emit, onBroadcastRecieved } from './socket'

onBroadcastRecieved('node-connected', (nodeId: string) => {
    console.log(`New node connected\n  ${nodeId}`)
})

onBroadcastRecieved("connect_error", (err: any) => {
    console.log(`Connection error due to ${err.message}`);
})

onBroadcastRecieved('node-message', (nodeId: string, message: any) => {
    console.log(`Message from ${nodeId}\n  ${message}`)
})

emit('join-network', console.log)

emit('message', 'test message')