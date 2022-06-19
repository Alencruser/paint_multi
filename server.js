const express = require('express'),
        app = express(),
        { Server } = require('socket.io'),
        http = require('http'),
        server = http.createServer(app),
        io = new Server(server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.render('index');
})

io.on('connection', (socket) => {
    socket.on('draw', (params) => {
        socket.broadcast.emit('draw',params);
    })
  });






server.listen(process.env.PORT || 8080, ()=> {
    console.log('serveur lancé sur le port 8080')
})
