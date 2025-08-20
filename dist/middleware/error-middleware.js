import { ZodError } from "zod";
import { ResponseError } from "../error/response-error.js";
export const errorMiddleware = async (error, req, res, next) => {
    if (error instanceof ZodError) {
        res.status(400).json({
            errors: `Validation Error : ${JSON.stringify(error)}`
        });
    }
    else if (error instanceof ResponseError) {
        res.status(error.status).json({
            errors: error.message
        });
    }
    else {
        res.status(500).json({
            errors: error.message
        });
    }
};
//# sourceMappingURL=error-middleware.js.map