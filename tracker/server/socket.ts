// import { addNode, deleteNode } from './nodes'
import { addNode, deleteNode } from './nodes'

export const ioConnect = (socket: any) => {
    console.log(`Initializing socket connection`)
    socket.on('join-network', () => {
        console.log(`Node joining network\n  ${socket.id}`)
        addNode(socket.id)
        socket.broadcast.emit('node-connected', socket.id)

        socket.on('message', (message: string) => {
            console.log(`Node ${socket.id} sending message ${message}`)
            socket.broadcast.emit('node-message', socket.id, message)
        })

        socket.on('disconnect', () => {
            console.log(`Node leaving network\n  ${socket.id}`)
            deleteNode(socket.id)

            socket.broadcast.emit('node-disconnected', socket.id)
        })
    })
}
