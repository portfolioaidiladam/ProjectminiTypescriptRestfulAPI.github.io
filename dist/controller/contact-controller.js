import { ContactService } from "../service/contact-service.js";
import { logger } from "../application/logging.js";
export class ContactController {
    static async create(req, res, next) {
        try {
            const request = req.body;
            const response = await ContactService.create(req.user, request);
            logger.debug("response : " + JSON.stringify(response));
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
            const contactId = Number(req.params.contactId);
            const response = await ContactService.get(req.user, contactId);
            logger.debug("response : " + JSON.stringify(response));
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
            request.id = Number(req.params.contactId);
            const response = await ContactService.update(req.user, request);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async remove(req, res, next) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.remove(req.user, contactId);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: "OK"
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async search(req, res, next) {
        try {
            const request = {
                name: req.query.name,
                email: req.query.email,
                phone: req.query.phone,
                page: req.query.page ? Number(req.query.page) : 1,
                size: req.query.size ? Number(req.query.size) : 10,
            };
            const response = await ContactService.search(req.user, request);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
//# sourceMappingURL=contact-controller.js.map