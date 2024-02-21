import express  from 'express'
import { Server } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);
        
export const io = new Server(server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.render('index');
})

server.listen(process.env.PORT || 8080, ()=> {
    console.log('serveur lancé sur le port 8080')
})
