# Network

Simple network structure to build applications from

### Structure

Each new node connects to the tracker via Websockets. Once the connection is established, nodes can communicate with other nodes thru the socket.io library.

You can also interact with the tracker via a REST api. The default url is localhost:8333

| method | url    | description                                     |
|--------|--------|-------------------------------------------------|
| GET    | /nodes | Show nodes connected (self-generated socket.id) |
|        |        |                                                 |

### Execution

Install dependencies with `npm install`

To spin up the tracker server (dev mode) with automatic reload `npm run tracker-dserve`

To spin up one node (dev mode) with automatic reload `npm run node-dserve`

### TODOs

- Docker / vagrant files
- Build commands - production build
- Multiple trackers - balance
- Use WebRTC instead of Websockets
