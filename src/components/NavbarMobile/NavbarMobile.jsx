"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/reduxSlices/auth/authSlice";

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

const NavbarMobile = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
    const username = useSelector(state => state.auth.user);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if(storedUser && !username) {
            const parsedUser = JSON.parse(storedUser);
            dispatch(login({user: parsedUser}))
        }
    }, [dispatch, username]);

  return (
    <nav className="navbar navbar-mobile py-4 d-flex d-lg-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler rounded-5"
          style={{ backgroundColor:"#3DC2DD" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand bg-warning" href="#">
          Logo
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              { `User: ${username}` }
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  className="text-dark text-decoration-none menu-list fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-key-fill fs-4"></i>
                </a>
              </li>
              { routes.map((route) => {
          const isActive = pathname === route.path;
          return (
          <li key={route.path} className="mb-3">
            <Image src={isActive ? route.activeIcon : route.icon} width="35" height="35" className="pb-2" alt="icon" />
                  <Link
                    href={route.path}
                    className={
                      `text-dark text-decoration-none menu-list fs-5
                        ${isActive ? "is-active" : ""}`}
                  >
                       {
                        <>
                           {route.link}
                        </>
                      }
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
                  <Image src="./icons/logout.svg" width="30" height="30" alt="logout icon" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
