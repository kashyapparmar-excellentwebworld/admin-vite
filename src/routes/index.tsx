import { createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { authRoutes } from "./authRoutes";
import { NotFound } from "@/pages";

export const router = createBrowserRouter([
    authRoutes,
    protectedRoutes,
    { path: "*", element: <NotFound /> },
]);