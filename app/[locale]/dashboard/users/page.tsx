import { useTranslations } from "next-intl";



export default function Users(){
     const t = useTranslations("dashboard");
    return (
        <section>
            <h1>{t("navContent.usersContent")}</h1>
        </section>
    )
}