import { Icon, LanguageToggle } from "@/components";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/hooks/redux";

const Header = () => {
    const { setTheme, theme } = useTheme();
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isAr = i18n.language === "ar";
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!dropdownRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = (e: any) => {
        e.stopPropagation()
        console.log("Called")
        dispatch(logout());
        setOpen(false);
    }

    return (
        <div id="header" className="shadow-2xl dark:bg-black h-fit p-4 w-full flex justify-end items-center" >
            {/* <div className="dark:text-white h-fit" >{t("common.welcome")}</div> */}
            <div className="flex gap-4 items-center" >
                <Icon
                    icon={theme === "light" ? "ant-design:moon-outlined" : "ant-design:sun-outlined"}
                    className="cursor-pointer dark:text-white"
                    fontSize={18}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <LanguageToggle />
                <div ref={dropdownRef} onClick={() => setOpen(!open)} className="relative px-2 py-1 rounded-xl flex items-center gap-2 bg-black/10 dark:bg-white/10 cursor-pointer" >
                    <Icon
                        icon="iconamoon:profile-circle"
                        fontSize={28}
                        className="dark:text-white"
                    />
                    <Icon
                        icon="entypo:chevron-small-down"
                        fontSize={20}
                        className="dark:text-white"
                        rotate={open ? 2 : 0}

                    />
                    {open && (
                        <div
                            className="absolute top-full mt-3 w-fit bg-white dark:bg-black dark:border-black rounded-xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top p-2 "
                            style={{ [isAr ? "left" : "right"]: 0 }}
                        >
                            <div
                                onClick={handleLogout}
                                className="flex gap-2 items-center hover:bg-black/10 dark:text-white dark:hover:bg-white/10 w-full py-1 px-4 rounded-xl"
                            >
                                <Icon
                                    icon={"cuida:logout-outline"}
                                    fontSize={16}
                                />
                                <p>Logout</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;