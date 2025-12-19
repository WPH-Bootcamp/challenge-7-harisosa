export type FormFieldType = "text" | "email" | "textarea";

export interface FormField <T> {
  name: keyof T;
  label: string;
  type: FormFieldType;
  placeholder: string;
}