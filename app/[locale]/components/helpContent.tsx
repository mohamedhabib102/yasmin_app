import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MdHelpOutline } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";



export default function HelpContent(){
    const t = useTranslations("helpPage")
    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="text-center ">
                  <h1 className="font-bold text-3xl text-[#393939] mb-4">{t("title")}</h1>
                  <p className="font-normal leading-6 text-[#393939]">{t("description")}</p>
                </div>

                <div className="mt-11 pt-20 text-center">
                  <h3 className="flex items-center justify-center gap-3 text-2xl text-[#393939] font-semibold mb-4"><MdHelpOutline  color="#9A3E63"/>  {t("sectionTitle")}</h3>
                  <p className="font-normal leading-6 text-[#393939] lg:w-1/2 w-auto m-auto">{t("sectionDescription")}</p>
                  <Link href={"/"} className="flex items-center justify-center gap-2.5 font-medium text-[18px] mt-2.5 pt-2.5">{t("contactSupport")}  <HiOutlineArrowNarrowRight color="#9A3E63"/></Link>
        </div>
        </motion.section>
    )
}