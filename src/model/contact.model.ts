export class ContactResponse {
  id: number;
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export class CreateContactRequest {
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export class UpdateContactRequest {
  id: number;
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}
