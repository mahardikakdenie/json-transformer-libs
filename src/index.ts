// src/index.ts
import { Request, Response } from 'express';

export const successResponse = (res: Response, data: any): void => {
    res.status(200).json({ success: true, data });
};

export const errorResponse = (res: Response, message: string, statusCode: number = 500): void => {
    res.status(statusCode).json({ success: false, message });
};
