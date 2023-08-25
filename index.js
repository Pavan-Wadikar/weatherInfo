const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser')
const router =require('express').Router()

const postRequest=require('./middleware')

console.log(postRequest)
const app=express()




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors({
    origin:"*"
}))



router.route('/index').post(postRequest.postData)

app.use(router)



app.listen(8000,()=>{
    console.log('App running on Port 8000')
})