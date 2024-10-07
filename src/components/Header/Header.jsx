"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/reduxSlices/auth/authSlice";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && !username) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(login({ user: parsedUser }));
    }
  }, [dispatch, username]);

  return (
    <>
      <header className="py-2 d-flex justify-content-between align-items-center d-none d-lg-flex">
        <p className="text-white mx-5 mb-0">{`User: ${username}`}</p>
        <div className="pe-5">
          <Image src={logo} alt="logo" className="logo-header"/>
        </div>
      </header>
    </>
  );
};

export default Header;
