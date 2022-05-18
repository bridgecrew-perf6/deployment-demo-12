const express = require('express')
const path = require('path')
const app = express()
//let build our path to the front end files so heroku can access them 

//Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

console.log(__dirname)


/* when heroku deploys our app it will provide its own port number
this port is stored on process.env.PORT

IF we are not deploying on heroku (working on our local machine)
it will then default to port 4005 */
const port = process.env.PORT || 4005 

app.listen(port, () => {
    console.log(`listening on ${port}`)
})