import Router from 'express';

import { getAllEmails } from '../controllers/emails.controller.js';

const router = Router();

router.get('/correo', getAllEmails);

export default router;