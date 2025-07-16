"use client"

import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"





export default function ListPrivacy(){
    const t = useTranslations("Privacy")
    const [active, setActive] =  useState(0);
    const locale =  useLocale()

    const toggle = (num: number) => {
        setActive(0)
        setActive(num)
    }
    return (

        <div className="mt-11 pt-20 text-center w-2/3 m-auto" dir={locale === "ar" ? "rtl" : "ltr"}>
            <div className={`text-left mb-2.5 last:mb-0 py-4 border-b border-b-[#FE93B9] ${active === 1 ? "max-h-[500px]" : "max-h-[90px]"}`}>
              <p className="flex items-center justify-between">{t("list.one.title")} <HiOutlineChevronDown 
              onClick={() => toggle(1)}
              className={`${active === 1 ? "rotate-180" : "rotate-0"} cursor-pointer transition`}
              color="#393939" size={30}/></p>
              <div className={` transition py-4 px-2 mt-2 rounded-lg text-[393939] bg-[#EEE] ${active === 1 ? " opacity-100 visible" : "invisible opacity-0"}`}>{t("list.one.description")}</div>
            </div>
              <div className={`text-left mb-2.5 last:mb-0 py-4 border-b border-b-[#FE93B9] ${active === 2 ? "max-h-[500px]" : "max-h-[90px]"}`}>
              <p className="flex items-center justify-between">{t("list.two.title")} <HiOutlineChevronDown 
              onClick={() => toggle(2)}
              className={`${active === 2 ? "rotate-180" : "rotate-0"} cursor-pointer transition`} 
              color="#393939" size={30}/></p>
              <div className={` transition py-4 px-2 mt-2 rounded-lg text-[393939] bg-[#EEE] ${active === 2 ? " opacity-100 visible" : "invisible opacity-0"}`}>{t("list.two.description")}

              </div>
            </div>
              <div className={`text-left mb-2.5 last:mb-0 py-4 border-b border-b-[#FE93B9] ${active === 3 ? "max-h-[500px]" : "max-h-[90px]"}`}>
              <p className="flex items-center justify-between">{t("list.three.title")} <HiOutlineChevronDown 
              onClick={() => toggle(3)}
              className={`${active === 3 ? "rotate-180" : "rotate-0"} cursor-pointer transition`} 
              color="#393939" size={30}/></p>
              <div className={` transition py-4 px-2 mt-2 rounded-lg text-[393939] bg-[#EEE] ${active === 3 ? " opacity-100 visible" : "invisible opacity-0"}`}>{t("list.three.description")}</div>
            </div>
        </div>
    )
}