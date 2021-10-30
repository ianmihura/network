# Network

Simple network structure to build applications from

### Structure

Each new node connects to the tracker via Websockets. Once the connection is established, nodes can communicate with other nodes thru the socket.io library. 

### Execution

Install dependencies with `npm install`

To spin up the tracker server (dev mode) with automatic reload `npm run tracker-dserve`

To spin up one node (dev mode) with automatic reload `npm run node-dserve`

### TODOs

- Docker / vagrant files
- Heartbeat from nodes
- Use WebRTC instead of Websockets
- Build commands - production build
- Multiple trackers - balance
