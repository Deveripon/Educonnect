import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
<<<<<<< HEAD
import { navigations } from "@/lib/navlinks";
import { SessionProvider } from "next-auth/react";

=======
import { navLinks } from "@/lib/navlinks";
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
const MainLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='z-40 bg-background/60 backdrop-blur-3xl fixed top-0 left-0 right-0 border-b '>
                <div className='container flex h-20 items-center justify-between py-6 '>
<<<<<<< HEAD
                    <SessionProvider>
                        <MainNav items={navigations} />
                    </SessionProvider>
=======
                    <MainNav items={navLinks} />
>>>>>>> 29db7a84d1eb575da2aabcfe336b14f92b310b88
                </div>
            </header>
            <main className='flex-1 pt-20 flex flex-col'>{children}</main>
            <SiteFooter />
        </div>
    );
};
export default MainLayout;
