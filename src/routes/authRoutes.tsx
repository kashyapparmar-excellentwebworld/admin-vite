import { Login } from "@/pages";
import { GuestRoute } from "./GuestRoute";

export const authRoutes = {
    element: <GuestRoute />,
    children: [
        { path: "/login", element: <Login /> },
        // { path: "/forgot-password", element: <ForgotPasswordPage /> },
        // { path: "/reset-password", element: <ResetPasswordPage /> },
    ],
};
