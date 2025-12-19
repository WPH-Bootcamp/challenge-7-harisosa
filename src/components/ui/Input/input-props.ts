export interface InputProps {
  label?: string;
  type?: 'number' | "text" | "password" | "email" | "textarea";
  name?: string;
  value?: string | number;
  onChange?: (e: string | number) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number
}