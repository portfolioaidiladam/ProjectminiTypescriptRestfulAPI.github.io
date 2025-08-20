import { CreateUserRequest, LoginUserRequest, UpdateUserRequest, UserResponse } from "../model/user-model.js";
import { User } from "@prisma/client";
export declare class UserService {
    static register(request: CreateUserRequest): Promise<UserResponse>;
    static login(request: LoginUserRequest): Promise<UserResponse>;
    static get(user: User): Promise<UserResponse>;
    static update(user: User, request: UpdateUserRequest): Promise<UserResponse>;
    static logout(user: User): Promise<UserResponse>;
}
//# sourceMappingURL=user-service.d.ts.map