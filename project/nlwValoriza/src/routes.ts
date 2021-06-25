import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);

// router.use(ensureAdmin);

/**
 * Se usássemos isso, todo o restante do código abaixo
 * seria afetado e teria de passar pelo middleware antes
 * de ser executado.
 * 
 * Como só queremos que a rota de tags seja afetada, passaremos
 * isso entre o path e o controller
 * 
 * É possível colocar quantos middlewares forem necessários entre
 * o path e o controller, mas os "da borda" são o path e o controller*/

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, createComplimentController.handle);

export { router };