export class ResponseError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
//# sourceMappingURL=response-error.js.map