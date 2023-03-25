import {Router} from 'express';
import testController from '../controllers/test.controller.js';

const router = new Router();

router.get('/', testController.getTest);

export default router;