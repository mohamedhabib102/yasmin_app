"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const dummyUsers = [
  { id: 1, name: "أحمد علي", email: "ahmed@example.com", active: true },
  { id: 2, name: "منى محمد", email: "mona@example.com", active: false },
];

export default function Users() {
  const t = useTranslations("dashboard");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold text-gray-800">{t("navContent.usersContent")}</h1>
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-[#f3e3e9]">
            <tr>
              <th className="px-6 py-4">الاسم</th>
              <th className="px-6 py-4">البريد الإلكتروني</th>
              <th className="px-6 py-4">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.active ? "نشط" : "غير نشط"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}