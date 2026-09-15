import { AiChat, AiChatList } from "@/components";

const AiIntegration = () => {
    return (
        <div className="flex p-4 pb-2" >
            <AiChatList />
            <div className="w-full" >
                <AiChat />
            </div>
        </div>
    )
}

export default AiIntegration;