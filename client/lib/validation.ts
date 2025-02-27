import {z} from 'zod'
import {
    INCORRECT_PASSWORD,
    INPUT_REQUIRED,
    INVALID_EMAIL,
    NAME_LENGTH,
    PASSWORD_LENGTH,
    MIN_LENGTH_PHONE,
    MAX_lENGTH_PHONE,
  } from './messageCode/authentication'
  
export const UserLogin = z.object({
    email:z.string().email('Địa chỉ email không hợp lệ'),
    password:z.string().min(6,'Mật khẩu phải có ít nhất 6 ký tự')
})

export const RegisterUser = z.object({
    username: z.string().min(2, NAME_LENGTH),
    email: z.string().email(INVALID_EMAIL),
    password: z.string().min(6, PASSWORD_LENGTH).optional(),
    phone: z.string().min(10, MIN_LENGTH_PHONE).max(11, MAX_lENGTH_PHONE),
  })
  export const RegisterAdmin = z.object({
    username: z.string().min(2, NAME_LENGTH),
    email: z.string().email(INVALID_EMAIL),
    phone: z.string().min(10, MIN_LENGTH_PHONE).max(11, MAX_lENGTH_PHONE),
  })