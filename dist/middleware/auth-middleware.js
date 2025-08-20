import { prismaClient } from "../application/database.js";
export const authMiddleware = async (req, res, next) => {
    const token = req.get('X-API-TOKEN');
    if (token) {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });
        if (user) {
            req.user = user;
            next();
            return;
        }
    }
    res.status(401).json({
        errors: "Unauthorized"
    }).end();
};
//# sourceMappingURL=auth-middleware.js.map