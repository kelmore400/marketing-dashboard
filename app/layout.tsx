import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    <main className="p-6">{children}</main>
                </div>
            </body>
        </html>
    );
}