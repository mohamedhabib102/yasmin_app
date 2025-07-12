"use client"
import { useLocale } from "next-intl";
import NavDashboard from "../components/navDashboard";




export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    // 
    const locale =  useLocale()
  return (
    <section className="flex bg-[#fff]" dir={locale === "ar"  ? "rtl" : "ltr"}>
      <aside className="w-1/4 bg-[#f5f5f5]">
        <nav className="p-3.5">
            <NavDashboard />
        </nav>
      </aside>
      <main className="w-[75%] p-5">
        {children}
      </main>
    </section>
  );
}
