export interface ContactResponse {
  id: number;
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export interface CreateContactRequest {
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export interface UpdateContactRequest {
  id: number;
  firstname: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export interface SearchContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  page: number;
  size: number;
}
