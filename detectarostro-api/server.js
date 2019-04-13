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

//const port = 3000; //const PORT = process.env.PORT;

const db = knex({
	client: 'pg',
	connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true
	}
});

app.use(cors());

app.get('/', (req, res)=> { res.send(database.users); })

// uso de inyeccion de dependencias

app.post('/signin', (req, res) => {signin.handleSignin (req, res, db, bcrypt) }) 

app.post('/register', (req, res) => {register.handleRegister (req, res, db, bcrypt) }) 

app.get('/profile/:id', (req, res) => {profile.handleProfile (req, res, db) })

app.put('/image', (req, res) => {image.handleImage (req, res, db) })

app.post('/imageurl', (req, res) => {image.handleAPICall (req, res) })

//app.listen(port, ()=>{ console.log(`app en puerto ${port}`); });
app.listen(process.env.PORT||3000, ()=>{ console.log(`app en puerto ${process.env.PORT}`); });