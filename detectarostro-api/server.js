const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex'); // se complementa con pg - documentacion: https://knexjs.org/

const register = require('./controladores/register');
const signin = require('./controladores/signin');
const profile = require('./controladores/profile');
const image = require('./controladores/image');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const db = knex({
	client: 'pg',
	connection: {
    host : '172.30.213.218', //vpn
    user : 'detectarostro',
    password : 'xD',
    database : 'detectarostro'
	}
});

app.use(cors());

app.get('/', (req, res)=> { res.send(database.users); })

// uso de inyeccion de dependencias

app.post('/signin', (req, res) => {signin.handleSignin (req, res, db, bcrypt) }) 

app.post('/register', (req, res) => {register.handleRegister (req, res, db, bcrypt) }) 

app.get('/profile/:id', (req, res) => {profile.handleProfile (req, res, db) })

app.put('/image', (req, res) => {image.handleImage (req, res, db) })

app.listen(port, ()=>{ console.log(`app en puerto ${port}`); });