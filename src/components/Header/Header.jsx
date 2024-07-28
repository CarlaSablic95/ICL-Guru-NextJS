const Header = () => {

    return (
        <>
            <header className="py-4 d-flex justify-content-between d-none d-lg-flex">
                <p className="text-white mx-5 mb-0">{ `User: ` }
                </p>
                <div className="bg-warning mx-5">Logo</div>
            </header>
        </>
    )
}

export default Header;