import { z, ZodType } from 'zod';
import {
  CreateContactRequest,
  UpdateContactRequest,
} from '../model/contact.model';

export class ContactValidation {
  static readonly CREATE: ZodType<CreateContactRequest> = z.object({
    firstname: z.string().min(1).max(100),
    lastname: z.string().min(1).max(100).optional(),
    email: z.email().max(100).optional(),
    phone: z.string().min(1).max(20).optional(),
  });

  static readonly UPDATE: ZodType<UpdateContactRequest> = z.object({
    id: z.number().positive(),
    firstname: z.string().min(1).max(100),
    lastname: z.string().min(1).max(100).optional(),
    email: z.email().max(100).optional(),
    phone: z.string().min(1).max(20).optional(),
  });
}
