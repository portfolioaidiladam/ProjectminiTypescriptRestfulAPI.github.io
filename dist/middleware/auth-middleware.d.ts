import { Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request.js";
export declare const authMiddleware: (req: UserRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth-middleware.d.ts.map