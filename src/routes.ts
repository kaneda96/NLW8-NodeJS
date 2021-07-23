import { Router } from 'express'
import { UserController } from './controller/UserController'
import { TagController } from './controller/TagController'
import { EnsureAdmin } from './middlewares/ensureAdmin'
import { AuthenticationController } from './controller/AuthenticationController'
import { ComplimentsController } from './controller/ComplimentsController'
import { EnsureAuthenticate } from './middlewares/ensureAuthenticate'

const router = Router()

const userController = new UserController()
const tagController = new TagController()
const authenticationController = new AuthenticationController()
const complimentsController = new ComplimentsController()

//Users
router.post("/users", userController.Insert);
router.get("/users", EnsureAuthenticate ,userController.List)
router.post("/authenticate",authenticationController.handle)


//Tags
router.post("/tags", EnsureAuthenticate, EnsureAdmin,  tagController.handle)

//Compliements
router.post("/compliments", EnsureAuthenticate,complimentsController.handle)
router.get("/compliments", EnsureAuthenticate, complimentsController.List)

export {router} ;