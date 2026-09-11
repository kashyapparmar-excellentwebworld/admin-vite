import { ForgotPassword, Login, ResetPassword } from "@/pages";
import { GuestRoute } from "./GuestRoute";

export const authRoutes = {
    element: <GuestRoute />,
    children: [
        { path: "/login", element: <Login /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/reset-password", element: <ResetPassword /> },
    ],
};
