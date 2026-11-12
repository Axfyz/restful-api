export interface AddressResponse {
  id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}

export interface CreateAddressRequest {
  contact_id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}

export interface GetAddressRequest {
  contact_id: number;
  address_id: number;
}

export interface UpdateAddressRequest {
  id: number;
  contact_id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}

export interface RemoveAddressRequest {
  contact_id: number;
  address_id: number;
}
