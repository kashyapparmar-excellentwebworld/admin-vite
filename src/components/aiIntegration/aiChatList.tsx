import { useTranslation } from "react-i18next";
import { Icon } from "..";

const AiChatList = () => {
    const { t } = useTranslation();
    return (
        <div className="w-70 min-h-[calc(100vh-98px)] rounded-2xl bg-gray-400 dark:bg-black flex flex-col gap-8 items-center justify-start" >
            <div className="w-full flex justify-center items-center p-4" >
                <p className="bg-white/20 shadow dark:text-white py-2 px-4 w-full rounded-2xl text-center cursor-pointer flex items-center justify-center gap-1" >
                    {t("ai_integration.new_chat")}
                    <Icon
                        icon="akar-icons:pencil"
                        className="inline-block text-base"
                    />
                </p>
            </div>
            <div className="w-full flex flex-col justify-start gap-2 px-1" >
                <p className="text-white dark:text-white/50 font-semibold text-sm px-2" >
                    {t("ai_integration.your_chats")}
                </p>
                <div className="w-full" >
                    <ul className="w-full flex flex-col gap-2 dark:text-white [&>li]:px-2 [&>li]:cursor-pointer [&>li]:hover:bg-white/10 [&>li]:rounded-lg [&>li]:w-full [&>li]:line-clamp-1" >
                        <li>
                            Manage user dilaog box configs adipisicing elit. Voluptas, fugit.
                        </li>
                        <li>
                            Review user code base, dolor sit amet consectetur adipisicing elit. Voluptas, fugit.
                        </li>
                        <li>
                            Identifing user query for multilingual, dolor sit amet consectetur adipisicing elit. Voluptas, fugit.
                        </li>
                        <li>
                            How to build your first, dolor sit amet consectetur adipisicing elit. Voluptas, fugit.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AiChatList