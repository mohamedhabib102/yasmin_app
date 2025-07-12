"use client"
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavDashboard(){
    const locale = useLocale()
    const pathName =  usePathname();
    const t = useTranslations("dashboard");
    return (
        <ul>
            <li className="mb-2.5 last:mb-0"><Link
            href={`/${locale}/dashboard/users`}
            className={`py-2.5 px-4 rounded-lg block text-[18px] ${pathName === `/${locale}/dashboard/users` ? "text-white bg-gradient-to-r from-[#FE93B9] to-[#9A3E63] border-[1px] border-transparent border-l-[#9A3E63]" 
            : "bg-[#bf90a3] text-black"}`}
            >
                {t("nav.users")}
            </Link></li>
            <li className="mb-2.5 last:mb-0"><Link 
            href={`/${locale}/dashboard/products`}
            className={`py-2.5 px-4 rounded-lg block  text-[18px] ${pathName === `/${locale}/dashboard/products` ? "text-white bg-gradient-to-r from-[#FE93B9] to-[#9A3E63] border-[1px] border-transparent border-l-[#9A3E63]" 
            : "bg-[#bf90a3] text-black"}`}
            >{t("nav.products")}</Link></li>
            <li className="mb-2.5 last:mb-0"><Link 
            href={`/${locale}/dashboard/barnds`}
            className={`py-2.5 px-4 rounded-lg block  text-[18px] ${pathName === `/${locale}/dashboard/barnds` ? "text-white bg-gradient-to-r from-[#FE93B9] to-[#9A3E63] border-[1px] border-transparent border-l-[#9A3E63]" 
            : "bg-[#bf90a3] text-black"}`}
            >{t("nav.brands")}</Link></li>
        </ul>
    )
}