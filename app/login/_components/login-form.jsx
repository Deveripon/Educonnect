"use client";
import Link from "next/link";

<<<<<<< HEAD
import { loginWithCredentials } from "@/app/_actions/authActions";
import PasswordField from "@/app/register/_components/Field/PasswordField";
=======
import { loginWithCredentials } from "@/app/_actions";
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
<<<<<<< HEAD
import { SignInWithGoogle } from "@/components/ui/GoogleSignInButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginForm() {
    const router = useRouter();
    const [showServerError, setShowServerError] = useState(false);

    const {
        register,
        formState: { errors },
        setError,
        handleSubmit,
        clearErrors,
    } = useForm();

    async function handleLogin(formdata) {
        const response = await loginWithCredentials(formdata);
        console.log(`response from submission`, response);

        if (response?.error) {
            setShowServerError(true);
            setError("server", {
                type: "manual",
                message: response.message,
            });
        } else {
            toast.success("Login Success");
            router.push("/");
=======
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
    const [error, setError] = useState(null);
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            const response = await loginWithCredentials(formData);
            if (!!response.error) {
                console.error(response.error);
                setError(response.error);
            } else {
                router.push("/");
            }
        } catch (error) {
            setError(error.message);
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
        }
    }
    return (
        <Card className='mx-auto max-w-sm w-full'>
            <CardHeader>
                <CardTitle className='text-2xl'>Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
<<<<<<< HEAD
                {errors.server && showServerError && (
                    <div className='group flex justify-between py-2 px-2 bg-red-300/50 rounded'>
                        <p className='text-md  text-red-500'>
                            {errors.server.message}
                        </p>
                        <X
                            onClick={() => {
                                setShowServerError(false);
                                clearErrors("server");
                            }}
                            className='size-5 hover:text-gray-800 cursor-pointer'
                        />
                    </div>
                )}
                <hr className='my-4' />
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='grid gap-4 mb-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            {errors.email && (
                                <p className='text-xs text-red-500'>
                                    {errors.email.message}
                                </p>
                            )}
                            <Input
                                {...register("email", {
                                    required: "Email is required*",
                                })}
                                id='email'
                                type='email'
                                placeholder='m@example.com'
                                name='email'
                                className={errors.email && "border-red-500"}
                            />
                        </div>

                        <div className='grid gap-2 '>
                            <Label htmlFor='password'>Password</Label>
                            {errors.password && (
                                <p className='text-xs text-red-500'>
                                    {errors.password.message}
                                </p>
                            )}
                            <PasswordField
                                register={{
                                    ...register("password", {
                                        required: "Password is required*",
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                            message:
                                                "Password must contain at least one uppercase letter, one lowercase letter, one number, and at least 8 characters",
                                        },
                                    }),
                                }}
                                className={errors.password && "border-red-500"}
                                id='password'
                                name='password'
                            />
                        </div>
                    </div>
                    <Button type='submit' className='w-full'>
                        Login
                    </Button>
                </form>
                <div className='mt-4 text-center text-sm'>
                    Don&apos;t have an account?
                    <br />
                    Register as{" "}
                    <Link href='register/instructor' className='underline'>
                        {" "}
                        Instructor
                    </Link>{" "}
                    |{" "}
                    <Link href='register/student' className='underline'>
                        {" "}
                        Student
                    </Link>
                </div>
                <SignInWithGoogle />
=======
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='m@example.com'
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label htmlFor='password'>Password</Label>
                                {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
                            </div>
                            <Input
                                id='password'
                                type='password'
                                required
                                name='password'
                            />
                        </div>
                        <Button type='submit' className='w-full'>
                            Login
                        </Button>
                    </div>
                </form>
                <div className='mt-4 text-center text-sm'>
                    Don&apos;t have an account?{" "}
                    <Link href='register' className='underline'>
                        Register
                    </Link>
                </div>
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
            </CardContent>
        </Card>
    );
}
