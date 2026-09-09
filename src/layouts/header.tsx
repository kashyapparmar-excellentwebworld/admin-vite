import { Icon, LanguageToggle } from "@/components";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { setTheme, theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div id="header" className="shadow-2xl dark:bg-black h-fit p-4 w-full flex justify-between items-center" >
            <div className="dark:text-white h-fit" >{t("common.welcome")}</div>
            <div className="flex gap-4 items-center" >
                <Icon
                    icon="icon-park-outline:theme"
                    className="cursor-pointer dark:text-white"
                    fontSize={18}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <LanguageToggle />
                <div className="px-2 py-1 rounded-xl flex items-center gap-2 bg-gray-50 dark:bg-white/10 cursor-pointer" >
                    <Icon
                        icon="iconamoon:profile-circle"
                        fontSize={28}
                        className="dark:text-white"
                    />
                    <Icon
                        icon="entypo:chevron-small-down"
                        fontSize={20}
                        className="dark:text-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;