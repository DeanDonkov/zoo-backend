// routes/animalRoutes.ts

import { Router } from 'express';
import { addAnimal, deleteAnimal, getAllAnimals, getAnimalById, updateAnimal } from '../controllers/animal';

const router = Router();

router.post('/', addAnimal);
router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);
router.put('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;
