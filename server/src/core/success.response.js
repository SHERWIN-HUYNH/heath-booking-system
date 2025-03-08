const StatusCode ={
    CREATED: 201,
    OK: 200,


}
const ReasonStatusCode = {
    CREATE: 'Created!',
    OK: 'Success',

}
class SuccessResponse {
    constructor(message, statusCode = StatusCode.OK, reason = ReasonStatusCode.OK, metadata={}) {
        this.message = !message ? reason : message;
        this.statusCode = statusCode;
        this.reason = reason;
        this.metadata = metadata
    }
    send(res,headers = {}){
        return res.status(this.statusCode).json(this)
    }
}

class OK extends SuccessResponse {
    constructor(message, metadata = {}) {
        super(message, StatusCode.OK, ReasonStatusCode.OK, metadata);
    }
}
class Created extends SuccessResponse {
    constructor(message, metadata = {}) {
        super(message, StatusCode.CREATED, ReasonStatusCode.CREATE, metadata);
    }
}

module.exports = {
    OK,
    Created,
    SuccessResponse
}