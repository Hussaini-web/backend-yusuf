"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dashboard API',
            version: '1.0.0',
            description: 'API documentation for Dashboard backend with Express, SQLite, and Swagger',
        },
        servers: [
            {
                url: 'https://backend-yusuf.onrender.com',
                description: 'Production server',
            },
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'User ID',
                        },
                        name: {
                            type: 'string',
                            description: 'User name',
                        },
                        email: {
                            type: 'string',
                            description: 'User email',
                        },
                        role: {
                            type: 'string',
                            description: 'User role',
                        },
                        status: {
                            type: 'string',
                            description: 'User status',
                        },
                        lastActive: {
                            type: 'string',
                            description: 'Last active status',
                        },
                        avatar: {
                            type: 'string',
                            description: 'Avatar URL',
                        },
                    },
                    required: ['name', 'email', 'role', 'status', 'lastActive', 'avatar'],
                },
                Order: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'Order ID',
                        },
                        user: {
                            type: 'string',
                            description: 'User name',
                        },
                        avatar: {
                            type: 'string',
                            description: 'Avatar URL',
                        },
                        project: {
                            type: 'string',
                            description: 'Project name',
                        },
                        address: {
                            type: 'string',
                            description: 'Address',
                        },
                        date: {
                            type: 'string',
                            description: 'Date',
                        },
                        status: {
                            type: 'string',
                            description: 'Order status',
                        },
                    },
                },
                DashboardStats: {
                    type: 'object',
                    properties: {
                        stats: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string' },
                                    value: { type: 'string' },
                                    bg: { type: 'string' },
                                },
                            },
                        },
                        earnings: {
                            type: 'object',
                            properties: {
                                target: { type: 'string' },
                                revenue: { type: 'string' },
                                profit: { type: 'string' },
                                orders: { type: 'string' },
                            },
                        },
                        usersToday: {
                            type: 'object',
                            properties: {
                                total: { type: 'string' },
                            },
                        },
                        earningsChart: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    earnings: { type: 'number' },
                                },
                            },
                        },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
