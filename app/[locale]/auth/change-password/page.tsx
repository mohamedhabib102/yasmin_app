'use client';
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { MdLockOpen } from "react-icons/md";






export default function ChangePassword(){
        const tchange =  useTranslations("PasswordReset");
        const locale = useLocale()
    return (
            <form className="bg-[#f5f5f5] p-6  space-y-6 py-4" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Email or Username */}
      <div className={`relative flex items-center border bg-[#F8F8F8] border-[#FE93B9] rounded-md overflow-hidden`}>
        <span className={`absolute h-full bg-[#FE93B9] px-2  flex justify-center items-center ${locale === "ar" ? "right-0" : "left-0"}`}>
          <MdLockOpen
          className="text-[#f5f5f5]"
          size={20} 
           />
        </span>
        <input
          type="password"
          placeholder={tchange("changePasswordTitle")}
          className={`w-full outline-none bg-[#F8F8F8] px-3 py-2 ${locale === "ar" ? "pr-10" : "pl-10"}`}
          name="newPassword"
          autoComplete="newPassword"
        />
      </div>



      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#FE93B9] text-[#393939] py-2 rounded-md  transition cursor-pointer hover:bg-[#ef91b2] hover:text-[#f5f5f5]"
      >
        <Link href={"/auth/change-password"}>
        {tchange("changePasswordTitle")}
        </Link>
      </button>
    </form>
    )
}