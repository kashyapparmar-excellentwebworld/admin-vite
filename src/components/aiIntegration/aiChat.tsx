import { useTranslation } from "react-i18next";
import { Icon } from "..";

const AiChat = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <div className="p-4 pb-0 flex w-full items-end min-h-[calc(100vh-98px)] " >
            <div className="w-full" >
                <div className="w-full flex gap-2 items-center" >
                    <input
                        name="user-message"
                        id="user-message"
                        className="p-4 bg-white dark:bg-black dark:text-white w-[90%] rounded-2xl outline-0 shadow shadow-gray-500"
                        placeholder={t("ai_integration.your_message")}
                    />
                    <div className={`${isAr && "rotate-180"} bg-gray-400 dark:bg-black cursor-pointer w-fit rounded-2xl p-3 flex justify-center `} >
                        <Icon
                            icon="akar-icons:send"
                            className="text-3xl dark:text-white"
                        />
                    </div>
                </div>
                <p className="text-center dark:s text-[10px] pt-2" >This is AI and can make mistakes.</p>
            </div>
        </div>
    )
}

export default AiChat;