import { toast } from "react-toastify";

export function validatePassword(password: string) {
  if (/\s/.test(password)){
    toast.warn('Password have whitespace!');
    return false;
  }
  if (/\d/.test(password) && /[A-Za-z]/.test(password)){
    return true;
  }

  toast.warn('Password no have letter or number!');
}
