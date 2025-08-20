import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { apiRouter } from "../route/api.js";
export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
export function startWebServer(port, callback) {
    web.listen(port, () => {
        console.log(`Web server started on port ${port}`);
        callback?.();
    });
}
//# sourceMappingURL=web.js.map