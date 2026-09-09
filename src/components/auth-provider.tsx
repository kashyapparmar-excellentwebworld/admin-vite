"use client";

import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AuthContextType {
    user: any | null; // Replace 'any' with your actual User type/interface
    isAuthenticated: boolean;
    isLoading: boolean;
    logout: () => void;
    login: (userData: { email: string }) => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    logout: () => { },
    login: () => { },
});

// Routes that do NOT require authentication
const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        async function checkAuthStatus() {
            try {
                const token = localStorage.getItem("token"); // Example fallback check

                if (token) {
                    setUser({ id: "1", email: "user@example.com" });
                } else {
                    setUser(null);
                }
            } catch (error) {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        }

        checkAuthStatus();
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

        // If user is NOT logged in and trying to access a protected route
        if (!user && !isPublicRoute) {
            navigate("/login");
        }

        // If user IS logged in and trying to access a public route (like /login)
        if (user && isPublicRoute) {
            navigate("/");
        }
    }, [user, isLoading, pathname, navigate]);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    const login = (userData: { email: string }) => {
        setUser(userData);
        localStorage.setItem("token", JSON.stringify(userData));
        navigate("/");
    };

    // Prevent flash of protected content while checking auth state
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
    if (isLoading && !isPublicRoute) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
                <p className="text-sm font-medium">Loading...</p>
            </div>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                logout,
                login
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;