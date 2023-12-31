// routes/index.ts

import { Router } from 'express';
import visitorRoutes from './visitor-router'; 

const router = Router();

router.use('/visitors', visitorRoutes); 

export default router;
