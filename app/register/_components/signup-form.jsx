"use client";
import Link from "next/link";

import LoadingSpinner from "@/components/loading-spinner";
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
=======
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import PasswordField from "./Field/PasswordField";

export function SignupForm({ role }) {
    const [showServerError, setShowServerError] = useState(false);
    const {
        register,
        formState: { errors, isSubmitting },
        setError,
        handleSubmit,
        watch,
        clearErrors,
    } = useForm();

    const router = useRouter();

    async function handleRegistration(formData) {
        const { firstName, lastName, email, password } = formData;
        try {
            const userRole =
                role === "student" || role === "instructor" ? role : "student";
            //api call to create user
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    userRole,
                }),
            });

            const data = await response.json();
            if (data?.error) {
                throw new Error(data.error);
            }

            if (response.status === 201) {
<<<<<<< HEAD
                toast.success("User Created Successfully");
=======
                toast("User Created Successfully");
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
                router.push("/login");
            }
        } catch (error) {
            setShowServerError(true);
            setError("server", {
                type: "manual",
                message: error.message,
            });
        }
    }

    return (
        <Card className='mx-auto max-w-sm'>
            <CardHeader>
                <CardTitle className='text-xl'>Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
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
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className='grid gap-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='grid gap-2'>
                                <Label htmlFor='first-name'>First name</Label>
                                {errors.firstName && (
                                    <p className='text-xs text-red-500'>
                                        {errors.firstName.message}
                                    </p>
                                )}
                                <Input
                                    {...register("firstName", {
                                        required: "First Name is required*",
                                    })}
                                    id='first-name'
                                    placeholder='Max'
                                    name='firstName'
                                    className={
                                        errors.firstName && "border-red-500"
                                    }
                                />
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor='last-name'>Last name</Label>
                                {errors.lastName && (
                                    <p className='text-xs text-red-500'>
                                        {errors.lastName.message}
                                    </p>
                                )}
                                <Input
                                    {...register("lastName", {
                                        required: "Last Name is required*",
                                    })}
                                    id='last-name'
                                    placeholder='Robinson'
                                    name='lastName'
                                    className={
                                        errors.lastName && "border-red-500"
                                    }
                                />
                            </div>
                        </div>
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
                        <div className='grid gap-2'>
                            <Label htmlFor='confirmPassword'>
                                Confirm Password
                            </Label>
                            {errors.confirmPassword && (
                                <p className='text-xs text-red-500'>
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                            <PasswordField
                                register={{
                                    ...register("confirmPassword", {
                                        required:
                                            "Confirm Password is required*",
                                        validate: (value) =>
                                            value === watch("password") ||
                                            "Passwords do not match",
                                    }),
                                }}
                                className={
                                    errors.confirmPassword && "border-red-500"
                                }
                                id='confirmPassword'
                                name='confirmPassword'
                            />
                        </div>
                        <Button type='submit' className='w-full'>
                            {isSubmitting && (
                                <span className='flex items-center justify-center'>
                                    <LoadingSpinner /> Signing up
                                </span>
                            )}
                            {!isSubmitting && "Sign Up"}
                        </Button>
                    </div>
                </form>

                <div className='mt-4 text-center text-sm'>
                    Already have an account?{" "}
                    <Link href='/login' className='underline'>
                        Sign in
                    </Link>
                </div>
<<<<<<< HEAD

                <SignInWithGoogle />
=======
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
            </CardContent>
        </Card>
    );
}
