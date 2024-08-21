"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/patients",
    link: "Patients",
    icon: "./icons/user.svg",
    activeIcon: "./icons/user-active.svg",
  },
  {
    path: "/calculation",
    link: "Calculation",
    icon: "./icons/calculation.svg",
    activeIcon: "./icons/calculation-active.svg",
  },
  {
    path: "/clinics",
    link: "Clinics",
    icon: "./icons/clinic.svg",
    activeIcon: "./icons/clinic-active.svg",
  },
  {
    path: "/account",
    link: "Account",
    icon: "./icons/settings.svg",
    activeIcon: "./icons/settings-active.svg",
  },
  {
    path: "/my-account",
    link: "My account",
    icon: "./icons/account.svg",
    activeIcon: "./icons/account-active.svg",
  },
];

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  return (
    <aside className="shadow d-none d-lg-flex flex-column justify-content-start align-items-center">
      <ul className="list-unstyled">
        <li className="mb-3">
          <div
            className="text-dark text-decoration-none menu-list ms-2"
            data-bs-toggle="modal"
            data-bs-target="#enterPassword"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
           <Image src="./icons/key.svg" width="30" height="30" alt="icon" className={`key ${isVisible ? "" : "invisible"}`} />
          </div>
        </li>
        {routes.map((route) => {
          const isActive = pathname === route.path;

          return (
          <li key={route.path} className="mb-3">
            {
             <>
               <Image src={isActive ? route.activeIcon : route.icon} width="35" height="35" className="pb-2" alt="icon" /> 
             </>
           }
                  <Link
                    href={route.path}
                    className={
                      `text-dark text-decoration-none menu-list fs-5
                        ${isActive ? "is-active" : ""}`}
                  >
                    {route.link}
                  </Link>
                </li>
          );
              })}
        <li className="mb-3">
          <a
            className="text-dark text-decoration-none menu-list fs-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Image src="./icons/logout.svg" width="30" height="30" alt="icon" /> Logout
          </a>
        </li>
      </ul>
    </aside>
    
  );
};

export default Sidebar;
