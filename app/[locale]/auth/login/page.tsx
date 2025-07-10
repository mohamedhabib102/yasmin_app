'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const t =  useTranslations("LoginPage");
  const locale = useLocale()

  return (
    <form className="bg-[#f5f5f5] p-6  space-y-6 py-4" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Email or Username */}
      <div className="relative flex items-center border bg-[#F8F8F8] border-[#FE93B9] rounded-md overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image src="/email.svg" width={20} height={20} alt="email" />
        </span>
        <input
          type="text"
          placeholder={t("email")}
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          name="email"
          autoComplete="email"
        />
      </div>

      {/* Password */}
      <div className="relative flex items-center border bg-[#F8F8F8] border-[#FE93B9] rounded-md overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image src="/password.svg" width={20} height={20} alt="password" />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={t("password")}
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          name="password"
        />
        <button
          type="button"
          className="px-2 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Image src="/eye.svg" width={20} height={20} alt="toggle visibility" />
        </button>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between items-center text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <div className="relative">
            <input
              type="checkbox"
              id="remember"
              className="peer appearance-none w-[19px] h-[18px] bg-[#eee] border border-[#868686] rounded-[3px] cursor-pointer checked:bg-[#FE93B9] checked:border-[#FE93B9]"
            />
            <span className="absolute top-0 left-1/2 flex justify-center items-center -translate-x-1/2 text-white text-[15px] opacity-0 peer-checked:opacity-100 pointer-events-none select-none">
              <FaCheck className='mt-[1px]' />
            </span>
          </div>
          {t("rememberMe")}
        </label>
        <Link href="/auth/send-to-email" className="text-[#FF3B30] hover:underline">{t("forgotPassword")}</Link>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#FE93B9] text-[#393939] py-2 rounded-md  transition hover:bg-[#ef91b2] hover:text-[#f5f5f5]"
      >
        {t("title")}
      </button>
    </form>
  );
}
