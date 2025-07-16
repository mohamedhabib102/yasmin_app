"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ListPrivacy from "../components/listPrivacy";
import { motion } from "framer-motion";



export default function Help() {
  const t = useTranslations("Privacy");

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

 
        <div className="text-center">
          <motion.h1
            className="font-bold text-3xl text-[#393939] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="font-normal leading-6 lg:w-1/2 w-auto m-auto text-[#393939]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("description")}
          </motion.p>
        </div>

-
        <ListPrivacy />
      </div>
    </section>
  );
}
