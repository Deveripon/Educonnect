import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";
import { buttonVariants } from "./ui/button";

export function SiteFooter({ className }) {
    return (
        <footer className={cn(className)}>
            <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
                <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
                    <Logo />
                    <p className='flex justify-center items-center text-sm text-center text-gray-800'>
                        ©️ All right reserved by
                        <Link
                            className={cn(buttonVariants({ variant: "link" }))}
                            href='https://github.com/deveripon'>
                            devripon
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
