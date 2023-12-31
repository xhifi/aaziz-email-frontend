import "./globals.scss";
import { Inter } from "next/font/google";

import { GlobalContextProvider } from "../contexts/GlobalContext";
import { DirectoryContextProvider } from "../contexts/DirectoryContext";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SideNav from "@/components/navigation/SideNav";
import DashContent from "@/components/DashContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <DirectoryContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navigation />
            <div className="container-fluid px-0 my-3">
              <div className="container-fluid col-11">
                <div className="d-flex">
                  <SideNav />
                  <DashContent>{children}</DashContent>
                </div>
              </div>
            </div>
            <Footer />
          </body>
        </html>
      </DirectoryContextProvider>
    </GlobalContextProvider>
  );
}
