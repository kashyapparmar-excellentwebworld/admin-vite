"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type loginFormData, loginSchema } from "@/lib/types";
import { validCreds } from "@/lib/constants";
import { login } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/hooks/redux";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm<loginFormData>({
        resolver: yupResolver(loginSchema),
        mode: "onTouched", // Validates on blur/interaction
    });

    // 3. Handle Form Submission
    const onSubmit = async (data: loginFormData) => {
        if (data?.email !== validCreds?.email) {
            setError("email", { message: "Email does not matched" })
            return
        }
        if (data?.password !== validCreds?.password) {
            setError("password", { message: "Password does not matched" })
            return
        }
        if (data?.email === validCreds?.email && data?.password === validCreds?.password) {
            dispatch(
                login({
                    admin: data,
                    accessToken: "response.data.accessToken",
                    refreshToken: "response.data.refreshToken",
                    rememberMe: true,
                }),
            );
            reset()
        }
    };

    return (
        <div id="login" className="bg-white h-screen dark:bg-black flex justify-center items-center" >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-125 bg-blue-500/50 p-4 rounded-2xl shadow-2xl shadow-blue-500/50
                "
            >
                <p className="w-full text-center font-bold text-2xl mb-8 capitalize dark:text-white" >login</p>
                <div className="w-full flex flex-col gap-4 justify-center mb-8" >
                    <div>
                        <Input
                            {...register("email")}
                            type="text"
                            placeholder="Email"
                            className="px-4 py-2 text-black bg-white/20"
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <Input
                            {...register("password")}
                            type="text"
                            placeholder="Password"
                            className="px-4 py-2 text-black bg-white/20"
                        />
                        {errors.password && (
                            <p className="text-xs text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                </div>
                <div className="w-full flex-col gap-4 flex justify-center" >
                    <Button
                        type="submit"
                        className="px-8 py-1 bg-blue-500 font-bold text-white rounded-2xl cursor-pointer capitalize"
                    >
                        Submit
                    </Button>
                    <div className="flex gap-4 w-full justify-center" >
                        <Link to={"/forgot-password"} className="dark:text-white text-xs underline cursor-pointer capitalize" >
                            forgot password?
                        </Link>
                        <Link to={"/reset-password"} className="dark:text-white text-xs underline cursor-pointer capitalize" >
                            reset password?
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
