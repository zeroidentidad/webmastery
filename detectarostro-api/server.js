const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const database = {
  users: [{
    id: '123',
    name: 'Jesus',
    email: 'jafs@gmail.com',
    entries: 0,
    joined: new Date()
  }],
  secrets: {
    users_id: '123',
    hash: 'secret'
  }
}

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signin', (req, res) => {
  var a = JSON.parse(req.body);
  if (a.username === database.users[0].email && a.password === database.secrets.hash) {
    res.send('registrado');
  } else {
    res.json('acceso denegado');
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: '124',
    name: name,
    email: email,
    entries: 0,
    joined: new Date()
  })
  res.json(database.users[database.users.length - 1])
})

app.post('/findface', (req, res) => {
  database.users.forEach(user => {
    if (user.email === req.body.email) {
      user.entries++
      res.json(user)
    }
  });
  res.json('nada')
})


app.get('/profile/:userId', (req, res) => {
  database.users.forEach(user => {
    if (user.id === req.params.userId) {
      return res.json(user);
    }
  })
})


app.listen(port, ()=>{
	console.log('app en puerto '+port);
});