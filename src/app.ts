import express from 'express'
import { router } from './routes'
import morgan from 'morgan'
import passport from 'passport'
import './database/index';
import path from 'path';
import cors from 'cors';
import Youch from 'youch';
// import {auth} from './config/basic-strategy';

// passport.use(auth);


// app.use(passport.initialize())



// app.get('*',passport.authenticate('basic',{session: false}))

class App {
  server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
    this.view();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(morgan('dev'))
    this.server.use(express.json());
  }

  routes() {
    this.server.use(router);
  }

  view(){
    this.server.set('view engine', 'pug')
    this.server.set('views', path.join(__dirname,'views'));
  }

  exceptionHandler() {
    this.server.use((req, res, next) => { //doesn't send response just adjusts it
      res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin
      res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
      );
      if(req.method === 'OPTIONS'){
          res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
          return res.status(200).json({});
      }
      next(); //so that other routes can take over
  })
  }
}
export default new App().server;
