"use client"

import { useTranslations } from "next-intl"


export default function Products(){
    const t = useTranslations("dashboard");
    return (
        <section>
            <h1>{t("navContent.brandsContent")}</h1>
        </section>
    )
}