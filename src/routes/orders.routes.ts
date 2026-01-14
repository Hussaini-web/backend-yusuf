import { Router, Request, Response } from 'express';
import db from '../db';
import { Order } from '../types';

const router = Router();

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/', (req: Request, res: Response) => {
  try {
    const orders = db.prepare('SELECT * FROM orders').all() as Order[];
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

export default router;

