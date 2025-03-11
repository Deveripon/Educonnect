import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "400"],
    variable: "--font-poppins",
});
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={cn(inter.variable, poppins.variable)}>
                {children}

                <Toaster richColors position='bottom-right' />
            </body>
        </html>
    );
}
