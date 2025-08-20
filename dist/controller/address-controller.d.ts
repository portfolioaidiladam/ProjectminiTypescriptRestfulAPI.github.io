import { UserRequest } from "../type/user-request.js";
import { Response, NextFunction } from "express";
export declare class AddressController {
    static create(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static get(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static update(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static remove(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
    static list(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=address-controller.d.ts.map