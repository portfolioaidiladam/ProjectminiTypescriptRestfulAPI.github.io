import { Contact } from "@prisma/client";
export type ContactResponse = {
    id: number;
    first_name: string;
    last_name?: string | null;
    email?: string | null;
    phone?: string | null;
};
export type CreateContactRequest = {
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
};
export type UpdateContactRequest = {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
};
export type SearchContactRequest = {
    name?: string;
    phone?: string;
    email?: string;
    page: number;
    size: number;
};
export declare function toContactResponse(contact: Contact): ContactResponse;
//# sourceMappingURL=contact-model.d.ts.map