import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { navigations } from "@/lib/navlinks";
import { SessionProvider } from "next-auth/react";

const MainLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='z-40 bg-background/60 backdrop-blur-3xl fixed top-0 left-0 right-0 border-b '>
                <div className='container flex h-20 items-center justify-between py-6 '>
                    <SessionProvider>
                        <MainNav items={navigations} />
                    </SessionProvider>
                </div>
            </header>
            <main className='flex-1 pt-20 flex flex-col'>{children}</main>
            <SiteFooter />
        </div>
    );
};
export default MainLayout;
