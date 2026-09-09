import { Icon } from "@/components";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";

const sidebarOptions = [
    {
        label: "Dashboard",
        translationKey: "sidebar.dashboard",
        path: "/",
        icon: "boxicons:dashboard",
        slug: "/",
    },
    {
        label: "Users",
        translationKey: "sidebar.users",
        path: "/users",
        icon: "heroicons:users",
        slug: "/users",
    },
    {
        label: "Dashboard",
        translationKey: "sidebar.products",
        path: "/products",
        icon: "ant-design:shopping-cart-outlined",
        slug: "/",
    },
    {
        label: "Dashboard",
        translationKey: "sidebar.buyers",
        path: "/buyers",
        icon: "icon-park-outline:buy",
        slug: "/",
    },
    {
        label: "Dashboard",
        translationKey: "sidebar.reports",
        path: "/reports",
        icon: "iconoir:reports",
        slug: "/",
    },
]

const Sidebar = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    return (
        <div id="sidebar" className="w-full max-w-70 shadow-2xl dark:bg-black/90 text-white min-h-screen">
            <div className="w-full flex justify-center py-4 ps-8 min-h-20 items-center" >
                <Icon
                    icon={"arcticons:google-admin"}
                    fontSize={24}
                    className="text-black dark:text-white font-bold"
                />
                <p className="ms-1 text-left w-full font-bold text-black dark:text-white" >{t("sidebar.admin_panel")}</p>
            </div>
            <div
                className="text-left [&>p]:w-full [&>p]:ps-4 [&>p]:cursor-pointer text-black dark:text-white w-full flex flex-col items-center justify-center gap-3 p-4"
            >
                {sidebarOptions?.map((el, idx) => (
                    <Link
                        key={idx}
                        to={el?.path}
                        className={`${pathname === el?.path ? "bg-gray-500" : ""} py-1 ps-4 rounded-lg w-full outline-0 flex items-center gap-2`}
                    >
                        <Icon icon={el?.icon} fontSize={20} />
                        {t(el?.translationKey)}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;