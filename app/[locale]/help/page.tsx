import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MdHelpOutline } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


export const metadata = {
  title: "Help",
  description: ""
};

export default function Help(){
    const t = useTranslations("helpPage")
    
    return (
        <section className="py-16" >
            <div className="custom__container">


                <div className="flex items-center gap-2 mb-8 text-[#393939] text-sm md:text-base">
                    <Link href="/" className="text-[#868686] hover:underline transition-all">
                      {t("links.Home")}
                    </Link>
                    <Image 
                    src="/arrow-right.svg" 
                    alt="Arrow Right" 
                    width={20} 
                    height={20} 
                    />
                    <span className="font-semibold text-[#393939]">{t("links.Help")}</span>
                  </div>  
                <div className="text-center ">
                  <h1 className="font-bold text-3xl text-[#393939] mb-4">{t("title")}</h1>
                  <p className="font-normal leading-6 text-[#393939]">{t("description")}</p>
                </div>

                <div className="mt-11 pt-20 text-center">
                  <h3 className="flex items-center justify-center gap-3 text-2xl text-[#393939] font-semibold mb-4"><MdHelpOutline  color="#9A3E63"/>  {t("sectionTitle")}</h3>
                  <p className="font-normal leading-6 text-[#393939] lg:w-1/2 w-auto m-auto">{t("sectionDescription")}</p>
                  <Link href={"/"} className="flex items-center justify-center gap-2.5 font-medium text-[18px] mt-2.5 pt-2.5">{t("contactSupport")}  <HiOutlineArrowNarrowRight color="#9A3E63"/></Link>
                </div>
            </div>
        </section>
    )
}