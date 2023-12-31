// routes/index.ts

import { Router } from 'express';
import visitorRoutes from './visitor-router'; 
import animalRoutes from './animal-router'

const router = Router();

router.use('/visitors', visitorRoutes); 
router.use('/animals', animalRoutes)

export default router;
