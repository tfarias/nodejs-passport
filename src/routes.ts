import { Router } from "express";
import HomeController from "./app/controllers/HomeController";
import UserController from "./app/controllers/UserController";

const router = Router()

router.get('/', HomeController.index);
router.get('/user', UserController.all);
router.delete('/user/:id', UserController.destroy);
router.get('/user/create', UserController.create);
router.post('/user/create', UserController.store)

export { router }