"use client";
import { logout } from "@/reduxSlices/auth/authSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    setLoading(true);
    try {
      // Eliminar la cookie de refresh token
      document.cookie =
        "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict";

      dispatch(logout());

      router.push("/login");
    } catch (error) {
      console.error("Error during logout", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content px-2 px-md-4">
          <div className="d-flex justify-content-end p-2">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center">Are you sure you want to log out?</p>
          </div>
          <div className="d-flex justify-content-evenly pb-3">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary border-0"
              style={{ backgroundColor: "#3DC2DD" }}
              data-bs-dismiss="modal"
              onClick={handleLogout}
              disabled={loading}
            >
              {loading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <span className="me-1"></span>{" "}
                  <span className="loader"></span>
                </div>
              ) : (
                "Yes"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
