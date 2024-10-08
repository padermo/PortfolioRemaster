"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Switch } from "antd";

export default function Lang() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLang = (checked: boolean | undefined) => {
    if (checked) {
      router.replace(pathname, { locale: "en" });
    } else {
      router.replace(pathname, { locale: "es" });
    }
  };

  return (
    <Switch
      checkedChildren={"en"}
      unCheckedChildren={"es"}
      defaultChecked={locale === "en" ? true : false}
      onChange={changeLang}
    />
  );
}
