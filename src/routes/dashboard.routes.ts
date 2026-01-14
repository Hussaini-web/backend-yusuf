import { Router, Request, Response } from 'express';
import {
  statsData,
  earningsData,
  usersToday,
  earningsChartData,
} from '../data/dashboardData';
import { DashboardStatsResponse } from '../types';

const router = Router();

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard statistics including stats, earnings, users today, and chart data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DashboardStats'
 */
router.get('/stats', (req: Request, res: Response) => {
  try {
    const response: DashboardStatsResponse = {
      stats: statsData,
      earnings: earningsData,
      usersToday: usersToday,
      earningsChart: earningsChartData,
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard stats', error });
  }
});

export default router;

