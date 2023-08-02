const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use('/assets', express.static('assets'));

const projects = require('./projects')

app.get('/',(req,res)=> {
    res.send(projects)
})

app.get('/images/*', ()=> {

})

app.listen(5000,()=> {
    console.log('app running on port 5000')
})