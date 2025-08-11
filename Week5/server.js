var express = require("express")
var app = express()
const projectsRoute = require('./routes/projects');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount the route at /api/projects
app.use('/api/projects', projectsRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
    console.log("Server is running on port: " + port);
    console.log(`Visit: http://localhost:${port}`);
})
