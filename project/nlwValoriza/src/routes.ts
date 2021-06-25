import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

// Controllers de listagem de elogios

const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

// Controller para listagem de tags

const listTagsController = new ListTagsController();

// Rotas

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

// Rotas de listagem de elogios, que necessitam de autenticação para execução

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

// Rota para listagem de tags
router.get("/tags", ensureAuthenticated, listTagsController.handle);

export { router };