// controllers/VisitorController.ts

import { Request, Response } from 'express';
import { Visitor } from '../interfaces/visitor';

export const addVisitor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, email, subscriptionType } = req.body as Visitor;
    const newVisitor = await Visitor.create({ name, phone, email, subscriptionType });
    res.status(201).json(newVisitor);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllVisitors = async (req: Request, res: Response): Promise<void> => {
  try {
    const Visitors = await Visitor.findAll();
    res.json(Visitors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getVisitorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const visitor = await Visitor.findByPk(req.params.id);
    if (!visitor) {
        res.status(404).json({ error: 'Visitor not found' });
        return;
    }
    res.json(Visitor);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVisitor = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updated] = await Visitor.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
        res.status(404).json({ error: 'Visitor not found' });
        return;
    }

    res.json({ message: 'Visitor updated successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteVisitor = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Visitor.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
        res.status(404).json({ error: 'Visitor not found' });
        return;
    }

    res.json({ message: 'Visitor deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
