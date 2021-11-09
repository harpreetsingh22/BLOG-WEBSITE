import express from 'express'   ;
import Connection from './database/db.js';
import bodyParser from 'body-parser' ;
import router from './routes/route.js';
import cors from 'cors' ;


const app=express()  ;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const Port=8000 ;
app.use('/',router) ;

Connection() ;
app.listen(Port,()=>console.log(`server is running at port ${Port}`)) ;
