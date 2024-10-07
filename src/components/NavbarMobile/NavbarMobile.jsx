"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/reduxSlices/auth/authSlice";
import logo from "../../../public/logo.png";
import user from "../../../public/icons/user.svg";
import activeUser from "../../../public/icons/user-active.svg";
import calculation from "../../../public/icons/calculation.svg";
import activeCalculation from "../../../public/icons/calculation-active.svg";
import clinic from "../../../public/icons/clinic.svg";
import activeClinic from "../../../public/icons/clinic-active.svg";
import account from "../../../public/icons/account.svg";
import activeAccount from "../../../public/icons/account-active.svg";
import myAccount from "../../../public/icons/my-account.svg";
import activeMyAccount from "../../../public/icons/my-account-active.svg";
import logoutIcon from "../../../public/icons/logout.svg";

const NavbarMobile = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);
  const { id } = useParams();

  const routes = [
    {
      path: "/patients",
      link: "Patients",
      icon: user,
      activeIcon: activeUser,
    },
    {
      path: `/calculation/register/${id}`,
      link: "Calculation",
      icon: calculation,
      activeIcon: activeCalculation,
      isClickable: false,
    },
    {
      path: "/clinics",
      link: "Clinics",
      icon: clinic,
      activeIcon: activeClinic,
    },
    {
      path: "/accounts",
      link: "Accounts",
      icon: account,
      activeIcon: activeAccount,
    },
    {
      path: "/my-account",
      link: "My account",
      icon: myAccount,
      activeIcon: activeMyAccount,
    },
  ];


  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && !username) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(login({ user: parsedUser }));
    }
  }, [dispatch, username]);

  return (
    <nav className="navbar navbar-mobile py-3 py-md-4 d-flex d-lg-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="bi bi-list text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div className="pe-5">
          <Image src={logo} alt="logo" className="logo-header"/>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              {`User: ${username}`}
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
              {routes.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <li key={route.path} className="mb-3">
                    <Image
                      src={isActive ? route.activeIcon : route.icon}
                      width="35"
                      height="35"
                      className="pb-2"
                      alt="icon"
                    />
                    <Link
                      href={route.path}
                      className={`text-dark text-decoration-none menu-list fs-5
                        ${isActive ? "is-active" : ""}`}
                    >
                      {<>{route.link}</>}
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
                  <Image src={logoutIcon} width="30" height="30" alt="icon" /> Logout
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
