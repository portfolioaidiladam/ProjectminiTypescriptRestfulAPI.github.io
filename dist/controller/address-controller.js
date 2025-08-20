import { AddressService } from "../service/address-service.js";
export class AddressController {
    static async create(req, res, next) {
        try {
            const request = req.body;
            request.contact_id = Number(req.params.contactId);
            const response = await AddressService.create(req.user, request);
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
            const request = {
                id: Number(req.params.addressId),
                contact_id: Number(req.params.contactId),
            };
            const response = await AddressService.get(req.user, request);
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
            request.contact_id = Number(req.params.contactId);
            request.id = Number(req.params.addressId);
            const response = await AddressService.update(req.user, request);
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
            const request = {
                id: Number(req.params.addressId),
                contact_id: Number(req.params.contactId),
            };
            await AddressService.remove(req.user, request);
            res.status(200).json({
                data: "OK"
            });
        }
        catch (e) {
            next(e);
        }
    }
    static async list(req, res, next) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await AddressService.list(req.user, contactId);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            next(e);
        }
    }
}
//# sourceMappingURL=address-controller.js.map