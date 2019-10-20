import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControlle';
import FileControlle from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // add the this middleware for all routes from here to the bottom

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileControlle.store);

export default routes;
