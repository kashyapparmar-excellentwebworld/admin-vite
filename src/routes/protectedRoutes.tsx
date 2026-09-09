import { lazy, Suspense } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Loader } from "@/components";

const Dashboard = lazy(() => import("@/pages/dashboard"))
const MainLayout = lazy(() => import("@/layouts/index"))
const UserComponent = lazy(() => import("@/pages/user"))


export const protectedRoutes = {
    element: <ProtectedRoute />,
    children: [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Suspense fallback={<Loader />}>
                        <Dashboard />
                    </Suspense>,
                },
                {
                    path: "users",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <UserComponent />
                        </Suspense>
                    ),
                },
            ]
        }
    ]
}