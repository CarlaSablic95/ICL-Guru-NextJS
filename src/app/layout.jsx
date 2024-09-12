"use client";

import metadata from "./metadata";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarMobile from "@/components/NavbarMobile/NavbarMobile";
import EnterPassword from "@/components/Modal/EnterPassword";
import Logout from "@/components/Modal/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
// import "bootstrap/dist/js/bootstrap";

const ClientBootstrap = dynamic(() => import("@/components/ClientBootstrap/ClientBootstrap"), { ssr: false });

console.log(metadata);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";


  return (
      <Provider store={store}>
      <html lang="en">
          <body className="d-flex flex-column min-vh-100">
            <ClientBootstrap />
            {!isLoginPage && (
              <>
                <Header />
                <div className="container-fluid">
                  <div className="row justify-content-evenly">
                    <div className="d-none d-lg-block col-lg-2 px-0">
                      <Sidebar />
                    </div>
                    <div className="d-block d-lg-none px-0">
                      <NavbarMobile />
                    </div>
                    <main className="col-12 col-lg-10 px-0">
                      {children}
                    </main>
                  </div>
                </div>
              </>
            )}
            {isLoginPage && (
              <main>
                {children}
              </main>
            )}

            <EnterPassword />
            <Logout />
          </body>
      </html>
      </Provider>
  );
}