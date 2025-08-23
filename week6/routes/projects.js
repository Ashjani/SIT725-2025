const express = require('express');
const router = express.Router();
console.log('--- The projects.js router file was loaded! ---');

let cardList = [
    {
        title: "Kitten 1",
        image: "images/cat-1.jpg",
        link: "About Kitten 1",
        description: "description about kitten 1"
    },
    {
        title: "Kitten 2",
        image: "images/cat-2-jpg", 
        link: "About Kitten 2",
        description: "description about kitten 2"
    }
];

router.get('/', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    console.log('Adding new project:', newProject);
    cardList.push(newProject);
    res.status(201).json({ statusCode: 201, message: "Project successfully added", data: newProject });
});


module.exports = router;