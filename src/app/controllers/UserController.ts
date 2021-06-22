import { json } from "express";
import User,{IUser} from "../models/User";

class UserController {
  async all(req, res){
    return User.find().then((users:IUser[]) => {
      return res.json(users); 
    }).catch(err => {
      return res.status(401).json({error: err.message})
    })
  }
  async create(req, res) {
    return res.render('user/create',{
      user: new User()
    })
   
  }

  async store(req, res) {
    let user = new User(req.body);
    user.setPassword(user.password)
    user.save().then((user) => {
      return res.json(user);
    }).catch(err => {
      return res.status(401).json({error: err.message})
    })
   
  }


  async destroy(req, res){
    User.findOneAndDelete(req.params.id).then(() => {
      return res.status(204).json();
    }).catch(err => {
      return res.status(401).json({error: err.message})
    })
  }
}

export default new UserController();
