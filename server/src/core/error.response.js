const StatusCode ={
    FORBIDDEN: 403,
    CONFLICT: 409,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401

}
const ReasonStatusCode = {
    FORBIDDEN: 'Forbidden Error',
    CONFLICT: 'Conflict Error',
    BAD_REQUEST: 'Bad Request Error',
    UNAUTHORIZED: 'Unauthorized Error'
}
const {StatusCodes,ReasonPhrases} = require('../ultils/httpStatusCodes');
const { UNAUTHORIZED } = require('../ultils/statusCodes');
class ErrorResponse extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class ConflictRequestError extends ErrorResponse {
    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT) {
        super(message, statusCode);
    }
}
class BadRequestError extends ErrorResponse {
    constructor(message = ReasonStatusCode.BAD_REQUEST, statusCode = StatusCode.BAD_REQUEST) {
        super(message, statusCode);
    }
}

class AuthFailureError extends ErrorResponse {
    constructor(message = ReasonPhrases.UNAUTHORIZED, statusCode = StatusCodes.UNAUTHORIZED) {
        super(message, statusCode);
    }
}
class NotFoundError extends ErrorResponse {
    constructor(message = ReasonPhrases.NOT_FOUND, statusCode = StatusCodes.NOT_FOUND) {
        super(message, statusCode);
    }
}
class ForbiddenError extends ErrorResponse {
    constructor(message = ReasonPhrases.FORBIDDEN, statusCode = StatusCodes.FORBIDDEN) {
        super(message, statusCode);
    }
}


module.exports = {
    ConflictRequestError,
    BadRequestError,
    AuthFailureError,
    NotFoundError,
    ForbiddenError
}