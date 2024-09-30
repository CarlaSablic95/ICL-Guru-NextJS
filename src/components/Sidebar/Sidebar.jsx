  "use client";
  import { useState } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { usePathname, useParams } from "next/navigation";
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

  const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
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

    return (
      <aside className="shadow d-none d-lg-flex flex-column justify-content-start align-items-center">
        <ul className="list-unstyled">
          <li className="mb-3 pt-5">
            <div
              className="text-dark text-decoration-none menu-list ms-2"
              data-bs-toggle="modal"
              data-bs-target="#enterPassword"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <Image
                src="../icons/key.svg"
                width="30"
                height="30"
                alt="icon"
                className={`key ${isVisible ? "" : "invisible"}`}
              />
            </div>
          </li>
          {routes.map((route) => {
            const isActive = pathname.startsWith(route.path.replace('[id]', id)); // Compara con la ruta base

            return (
              <li key={route.path} className="mb-3">
                <Image
                  src={isActive ? route.activeIcon : route.icon}
                  width="35"
                  height="35"
                  className="pb-2"
                  alt="icon"
                />
                {route.isClickable === false ? (
                  <span
                    className={`text-dark text-decoration-none fs-5 ${isActive ? "is-active" : ""}`}
                  >
                    {route.link}
                  </span>
                ) : (
                  <Link
                    href={route.path}
                    className={`text-dark text-decoration-none menu-list fs-5 ${isActive ? "is-active" : ""}`}
                  >
                    {route.link}
                  </Link>
                )}
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
      </aside>
    );
  };

  export default Sidebar;
