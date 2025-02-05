"use client";
import Link from "next/link";

import { loginWithCredentials } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
        }
    }
    return (
        <Card className='mx-auto max-w-sm w-full'>
            <CardHeader>
                <CardTitle className='text-2xl'>Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
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
            </CardContent>
        </Card>
    );
}
