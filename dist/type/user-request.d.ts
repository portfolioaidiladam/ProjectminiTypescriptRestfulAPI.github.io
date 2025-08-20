import { Request } from "express";
import { User } from "@prisma/client";
export interface UserRequest extends Request {
    user?: User;
}
//# sourceMappingURL=user-request.d.ts.map