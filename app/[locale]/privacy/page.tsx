import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";
import ListPrivacy from "../components/listPrivacy";

export const metadata = {
  title: "Privacy",
  description: ""
};

export default function Help(){
    const t = useTranslations("Privacy")
    
    return (
        <section className="py-16">
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
                    <span className="font-semibold text-[#393939]">{t("links.Priv")}</span>
                  </div>  
                <div className="text-center ">
                  <h1 className="font-bold text-3xl text-[#393939] mb-4">{t("title")}</h1>
                  <p className="font-normal leading-6 lg:w-1/2 w-auto m-auto text-[#393939]">{t("description")}</p>
                </div>

                <ListPrivacy />
            </div>
        </section>
    )
}