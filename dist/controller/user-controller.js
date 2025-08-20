import { UserService } from "../service/user-service.js";
export class UserController {
    static async register(req, res, next) {
        try {
            const request = req.body;
            const response = await UserService.register(request);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async login(req, res, next) {
        try {
            const request = req.body;
            const response = await UserService.login(request);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async get(req, res, next) {
        try {
            const response = await UserService.get(req.user);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async update(req, res, next) {
        try {
            const request = req.body;
            const response = await UserService.update(req.user, request);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async logout(req, res, next) {
        try {
            await UserService.logout(req.user);
            res.status(200).json({
                data: "OK"
            });
        }
        catch (e) {
            next(e);
        }
    }
}
//# sourceMappingURL=user-controller.js.map