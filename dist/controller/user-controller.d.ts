import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request.js";
export declare class UserController {
    static register(req: Request, res: Response, next: NextFunction): Promise<void>;
    static login(req: Request, res: Response, next: NextFunction): Promise<void>;
    static get(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static update(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static logout(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=user-controller.d.ts.map