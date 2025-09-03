var express = require("express")
const app = express()
const projectsRouter = require('./routes/projects');
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Pass http server to socket.io

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Mount the route at /api/projects
app.use('/api/projects', projectsRouter);

// socket.io setup
io.on('connection', (socket) => {
console.log('a user connected');
socket.on('disconnect', () => {
console.log('user disconnected');
});
// this will emit a random num every second 
setInterval(()=>{
socket.emit('number', parseInt(Math.random()*10));
}, 1000);
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


var port = process.env.port || 3000;
http.listen(port, () => {
    console.log("App listening to: " + port)
    console.log("Server is running on port: " + port);
    console.log(`Visit: http://localhost:${port}`);
})
module.exports = app;