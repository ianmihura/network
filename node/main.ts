import { ioConnect, emit, onBroadcastRecieved } from './socket'

ioConnect()

// emit -> emits a message to the network
// onBroadcastRecieved -> defines a listener for the network