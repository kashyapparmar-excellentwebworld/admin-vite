import { useTranslation } from "react-i18next";

const UserComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4" >
            <h1 className="text-3xl font-bold dark:text-white">{t("user_management.title")}</h1>
        </div>
    )
}

export default UserComponent
