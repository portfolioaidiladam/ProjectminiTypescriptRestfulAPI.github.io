import { toUserResponse } from "../model/user-model.js";
import { Validation } from "../validation/validation.js";
import { UserValidation } from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
export class UserService {
    static async register(request) {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);
        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        });
        if (totalUserWithSameUsername != 0) {
            throw new ResponseError(400, "Username already exists");
        }
        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);
        const user = await prismaClient.user.create({
            data: registerRequest
        });
        return toUserResponse(user);
    }
    static async login(request) {
        const loginRequest = Validation.validate(UserValidation.LOGIN, request);
        let user = await prismaClient.user.findUnique({
            where: {
                username: loginRequest.username
            }
        });
        if (!user) {
            throw new ResponseError(401, "Username or password is wrong");
        }
        const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
        if (!isPasswordValid) {
            throw new ResponseError(401, "Username or password is wrong");
        }
        user = await prismaClient.user.update({
            where: {
                username: loginRequest.username
            },
            data: {
                token: uuid()
            }
        });
        const response = toUserResponse(user);
        response.token = user.token;
        return response;
    }
    static async get(user) {
        return toUserResponse(user);
    }
    static async update(user, request) {
        const updateRequest = Validation.validate(UserValidation.UPDATE, request);
        if (updateRequest.name) {
            user.name = updateRequest.name;
        }
        if (updateRequest.password) {
            user.password = await bcrypt.hash(updateRequest.password, 10);
        }
        const result = await prismaClient.user.update({
            where: {
                username: user.username
            },
            data: user
        });
        return toUserResponse(result);
    }
    static async logout(user) {
        const result = await prismaClient.user.update({
            where: {
                username: user.username
            },
            data: {
                token: null
            }
        });
        return toUserResponse(result);
    }
}
//# sourceMappingURL=user-service.js.map