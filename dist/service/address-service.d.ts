import { Address, User } from "@prisma/client";
import { AddressResponse, CreateAddressRequest, GetAddressRequest, RemoveAddressRequest, UpdateAddressRequest } from "../model/address-model.js";
export declare class AddressService {
    static create(user: User, request: CreateAddressRequest): Promise<AddressResponse>;
    static checkAddressMustExists(contactId: number, addressId: number): Promise<Address>;
    static get(user: User, request: GetAddressRequest): Promise<AddressResponse>;
    static update(user: User, request: UpdateAddressRequest): Promise<AddressResponse>;
    static remove(user: User, request: RemoveAddressRequest): Promise<AddressResponse>;
    static list(user: User, contactId: number): Promise<Array<AddressResponse>>;
}
//# sourceMappingURL=address-service.d.ts.map