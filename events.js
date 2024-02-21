import { io } from './server'

io.on('connection', (socket) => {
    socket.on('draw', (params) => {
        socket.broadcast.emit('draw',params);
    })
});