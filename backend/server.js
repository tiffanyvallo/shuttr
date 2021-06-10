// pulls in the express library
const express = require('express');
const pool = require('./config/db'); 

// allows us to write app and the crud action we want ex. app.get | app.post | app.delete etc...
const app = express()
const cors = require('cors');

// middleware
app.use(express.json()) // =>  allows us to read the request or req body
app.use(cors())

//////////// Routes (to be filled out later in tutorial)




app.get('/', (req, res) => {
  res.send('Hello World')
})

// create a user
app.post('/users', async (req, res) => {
  try {
      // await
      console.log(req.body)
      const { username } = req.body
      const { password } = req.body
      const newUser = await pool.query(
          "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", // returning * lets us see the data in the json response
          [username, password]
      ) 
      res.json(newUser.rows[0])
  } catch (err) {
      console.error(err.message)
  }
})

// get all users
app.get('/users', async (req, res) => {
  try {
      const allUsers = await pool.query("SELECT * FROM users")
      res.json(allUsers.rows)
  } catch (err) {
      console.error(err.message)
  }
})

// get only one user
app.get('/users/:id', async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  try {
      const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]) 
      // $1 is a placeholder, then the 2nd argument is what that variable is 
      //going to be
      res.json(user.rows[0])
  } catch (err) {
      console.error(err.message)
  }
})
//to sign up
//  app.post('/signup',async (req, res)=> {

//   const username = req.body.username;
//   const password = req.body.password; 
//   pool.query(
//     "INSERT INTO users (password, username) VALUES (?,?)",
//     [password, username],
//     (err, result)=> {
//     console.log(err);
//     }
//   );
// });

// define what localhost port we want our server to run on
app.listen(3001, ()=> {
  console.log(`Server running on port: 3001`)
})