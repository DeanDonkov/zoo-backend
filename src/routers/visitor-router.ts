
import { Router } from 'express';
import { addVisitor, deleteVisitor, getAllVisitors, getVisitorById, updateVisitor } from '../controllers/visitors';

const router = Router();

router.post('/', addVisitor);
router.get('/', getAllVisitors);
router.get('/:id', getVisitorById);
router.put('/:id', updateVisitor);
router.delete('/:id', deleteVisitor);

export default router;
