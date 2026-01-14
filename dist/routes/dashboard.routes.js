"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardData_1 = require("../data/dashboardData");
const router = (0, express_1.Router)();
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
router.get('/stats', (req, res) => {
    try {
        const response = {
            stats: dashboardData_1.statsData,
            earnings: dashboardData_1.earningsData,
            usersToday: dashboardData_1.usersToday,
            earningsChart: dashboardData_1.earningsChartData,
        };
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard stats', error });
    }
});
exports.default = router;
