import { ContactResponse, CreateContactRequest, SearchContactRequest, UpdateContactRequest } from "../model/contact-model.js";
import { Contact, User } from "@prisma/client";
import { Pageable } from "../model/page.js";
export declare class ContactService {
    static create(user: User, request: CreateContactRequest): Promise<ContactResponse>;
    static checkContactMustExists(username: string, contactId: number): Promise<Contact>;
    static get(user: User, id: number): Promise<ContactResponse>;
    static update(user: User, request: UpdateContactRequest): Promise<ContactResponse>;
    static remove(user: User, id: number): Promise<ContactResponse>;
    static search(user: User, request: SearchContactRequest): Promise<Pageable<ContactResponse>>;
}
//# sourceMappingURL=contact-service.d.ts.map