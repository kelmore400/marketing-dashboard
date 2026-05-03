import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 min-h-screen">
                    <Navbar />
                    <main className="p-6">{children}</main>
                </div>
            </body>
        </html>
    );
}