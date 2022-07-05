const app = require('./src/app');
const SocketIO = require('socket.io');

const server = app.listen(3001, () => {
    console.log('Server listening on port 3001');
})

const io = SocketIO(server);

io.on('connection', (socket: any) => {
    
    socket.on('chat:typing', (username: string) => {
        socket.broadcast.emit('chat:typing', username);
    })

    socket.on('chat:message', (data: any) => {
        io.sockets.emit('chat:message', data);
    });
});