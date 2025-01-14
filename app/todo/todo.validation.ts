
import { body } from 'express-validator';

export const createTodo = [
    body('task').notEmpty().withMessage('task is required').isString().withMessage('status must be a string'),
    body('user').notEmpty().withMessage('user is required').isString().withMessage('user must be a string'),
];

export const updateTodo = [
    body('task').notEmpty().withMessage('task is required').isString().withMessage('status must be a string'),
    body('status').notEmpty().withMessage('status is required').isString().withMessage('status must be a string'),
    body('user').notEmpty().withMessage('user is required').isString().withMessage('user must be a string'),
];

export const editTodo = [
    body('task').notEmpty().withMessage('task is required').isString().withMessage('status must be a string'),
    body('status').notEmpty().withMessage('status is required').isString().withMessage('status must be a string'),
    body('user').notEmpty().withMessage('user is required').isString().withMessage('user must be a string'),
];
