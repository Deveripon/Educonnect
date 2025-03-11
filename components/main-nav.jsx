"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import lwsLogo from "@/assets/lws_logo.svg";
import { Menu, X } from "lucide-react";
<<<<<<< HEAD
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
=======
import Image from "next/image";
import { useState } from "react";
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
import { MobileNav } from "./mobile-nav";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
<<<<<<< HEAD

export function MainNav({ items, children }) {
    // state for displaying mobile nav or not
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { data: session } = useSession();
    const [loginSession, setLoginSession] = useState(null);

    useEffect(() => {
        setLoginSession(session);
    }, [session]);
=======
export function MainNav({ items, children }) {
    // state for displaying mobile nav or not
    const [showMobileMenu, setShowMobileMenu] = useState(false);
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88

    return (
        <>
            {/* main nav left side */}
            <div className='flex gap-6 lg:gap-10'>
                <Link href='/'>
                    <Image className='max-w-[100px]' src={lwsLogo} alt='Logo' />
                </Link>
                {items?.length ? (
                    <nav className='hidden gap-6 lg:flex'>
                        {items?.map((item) => (
                            <Link
                                key={item?.id}
                                href={item.disabled ? "#" : item.href}
                                className={cn(
                                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                                )}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                ) : null}

                {showMobileMenu && items && (
                    <MobileNav items={items}>{children}</MobileNav>
                )}
            </div>

            {/* main nav right side */}
            <nav className='flex items-center gap-3'>
<<<<<<< HEAD
                {!loginSession && (
                    <div className='items-center gap-3 hidden lg:flex'>
                        <Link
                            href='/login'
                            className={cn(
                                buttonVariants({ size: "sm" }),
                                "px-4"
                            )}>
                            Login
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline' size='sm'>
                                    Register
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56 mt-4'>
                                <DropdownMenuItem className='cursor-pointer'>
                                    <Link href='/register/student'>
                                        Student
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='cursor-pointer'>
                                    <Link href='/register/instructor'>
                                        Instructor
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}

                {loginSession && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='cursor-pointer'>
                                <Avatar>
                                    <AvatarImage
                                        src='https://github.com/shadcn.png'
                                        alt='@shadcn'
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className='w-56 mt-4'>
                            <DropdownMenuItem
                                className='cursor-pointer'
                                asChild>
                                <Link href='account'>Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className='cursor-pointer'
                                asChild>
                                <Link href='account/enrolled-courses'>
                                    My Courses
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className='cursor-pointer'
                                asChild>
                                <Link href=''>Testimonials & Certificates</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className='cursor-pointer'
                                asChild>
                                <Link href='#' onClick={() => signOut()}>
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
=======
                <div className='items-center gap-3 hidden lg:flex'>
                    <Link
                        href='/login'
                        className={cn(buttonVariants({ size: "sm" }), "px-4")}>
                        Login
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' size='sm'>
                                Register
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 mt-4'>
                            <DropdownMenuItem className='cursor-pointer'>
                                <Link href='/register/student'>Student</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='cursor-pointer'>
                                <Link href='/register/instructor'>Instructor</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer'>
                            <Avatar>
                                <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='w-56 mt-4'>
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link href='account'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link href='account/enrolled-courses'>
                                My Courses
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link href=''>Testimonials & Certificates</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer' asChild>
                            <Link href=''>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88

                <button
                    className='flex items-center space-x-2 lg:hidden'
                    onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <X /> : <Menu />}
                </button>
            </nav>
        </>
    );
}
