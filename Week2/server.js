const express = require('express');
const app = express();
const port = 3000;

// sum
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send(`The sum is ${sum}`);
});

// substractiom
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 - num2;
    res.send(`The result of subtraction is ${result}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
