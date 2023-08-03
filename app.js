const connectionDataBase = require('./config/connection');
const userController = require('./controller/userController');
const express = require('express');
const app = express();
const port = 3333;
app.use(express.json());
app.listen(3333, () => { console.log(`Run server...${port}`) });

app.get('/', (req,res) => res.send("API-USER"));

app.post('/user', userController.createUser);
app.get('/user', userController.findUsers);


