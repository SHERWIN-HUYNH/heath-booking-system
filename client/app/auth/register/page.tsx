import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RegisterForm } from '@/components/form/RegisterForm'
const Home = () => {
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar bg-[#f1eff2] my-auto relative w-1/2 left-0 top-0 ">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm />

          <div className="text-14-regular mt-20 flex justify-between ">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/login" className="text-green-500">
              Đăng nhập
            </Link>
          </div>
        </div>
      </section>
    
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="fixed right-0 top-0 h-screen w-1/2 object-cover"
      />
    </div>
  )
}

export default Home
