import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col dark:text-white items-center justify-center gap-4 py-20">
            <h1 className="text-4xl font-extrabold">404</h1>
            <p>{t("cms.not_found")}.</p>
            <Button>
                <Link to="/">{t("common.go_home")}</Link>
            </Button>
        </div>
    )
}