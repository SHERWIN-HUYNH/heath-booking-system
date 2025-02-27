'use client'
import { UserLogin } from '@/lib/validation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z} from 'zod'
import CustomFormField, { FormFieldType } from '../CustomFormField'
import { PasswordInput } from '../PasswordInput'
import { Label } from '../ui/label'
import {zodResolver} from '@hookform/resolvers/zod'
import SubmitButton from '../SubmitButton'
function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const form = useForm<z.infer<typeof UserLogin>>({
        resolver: zodResolver(UserLogin),
        defaultValues: {
          email: '',
          password: '',
        },
      })
      const onSubmit = async (values: z.infer<typeof UserLogin>) => {
        setIsLoading(true)
        console.log(values)
        // login process
      }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Xin chào 👋</h1>
          <p className="text-dark-700">
            Bước đầu của sức khỏe tốt hơn – Đặt lịch hẹn ngay hôm nay!
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="ngothiduyencute@gmail.com"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <div className="space-y-2 flex-1 mt-2">
          <Label htmlFor="current_password" className="shad-input-label ">
            Mật khẩu
          </Label>
          <PasswordInput
            id="current_password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <SubmitButton isLoading={isLoading} className='h-11 w-full text-white'>Đăng nhập</SubmitButton>
      </form>
  </FormProvider>
  )
}

export default LoginForm


