"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, data) => {
    res.status(200).json({ success: true, data });
};
exports.successResponse = successResponse;
const errorResponse = (res, message, statusCode = 500) => {
    res.status(statusCode).json({ success: false, message });
};
exports.errorResponse = errorResponse;
