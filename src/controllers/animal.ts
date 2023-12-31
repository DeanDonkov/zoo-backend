// controllers/AnimalController.ts

import { Request, Response } from 'express';
import Animal, { IAnimal } from '../interfaces/animal';

export const addAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, species, age } = req.body as IAnimal;
    const newAnimal = new Animal({ name, species, age });
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAnimals = async (req: Request, res: Response): Promise<void> => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAnimalById = async (req: Request, res: Response): Promise<void> => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }
    res.json(animal);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnimal) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }
    res.json(updatedAnimal);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    if (!deletedAnimal) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }
    res.json({ message: 'Animal deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
