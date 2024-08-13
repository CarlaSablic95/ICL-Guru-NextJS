import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";

const Header = () => {
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
        <>
            <header className="py-4 d-flex justify-content-between d-none d-lg-flex">
                <p className="text-white mx-5 mb-0">{ `User: ${username}` }
                </p>
                <div className="bg-warning mx-5">Logo</div>
            </header>
        </>
    )
}

export default Header;