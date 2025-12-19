import type { FormField } from "./form-field";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  fields: FormField<ContactFormData>[];
  services: string[];
}