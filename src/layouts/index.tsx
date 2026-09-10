import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Suspense } from "react";
import { Loader } from "@/components";

const Layout = () => {
    return (
        <div className="flex" >
            <Sidebar />
            <div className="flex flex-col w-full h-fit" >
                <Header />
                <div className="overflow-auto h-[calc(100vh-74px)] scrollbar-thin" >
                    <Suspense
                        fallback={
                            <div className="flex-1 flex flex-col justify-center items-center relative min-h-fit">
                                <Loader />
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Layout;