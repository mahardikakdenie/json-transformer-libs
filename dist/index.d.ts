import { Response } from 'express';
export declare const successResponse: (res: Response, data: any) => void;
export declare const errorResponse: (res: Response, message: string, statusCode?: number) => void;
