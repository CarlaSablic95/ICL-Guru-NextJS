"use client";

import { Input } from "@/components/Inputs/Input";
import Button from "@/components/Button/Button2";

const MyAccount = () => {
    
    return (
        <section className="col-12 col-md-11 py-4 px-3 px-md-5 mx-auto">
            <h1 className="text-center text-uppercase fw-bold">My account</h1>
                <div className="container">
                <div className="row justify-content-evenly pt-4">
                    <div className="col-10 col-md-5 mb-5 mb-md-3">
                        <h2 className="fw-bold mb-4">Personal Data</h2>
                        <form>
                        <div className="mb-3">
                            <label className="mb-2" htmlFor="name">Name:<span className="text-danger">*</span>
                            </label>
                            <Input 
                                label="Name:"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="First name"
                                rounded="2rem"
                            />
                        </div>

                        <div className="mb-3">
                        <label className="mb-2" htmlFor="name">Last name:<span className="text-danger">*</span>
                            </label>
                            <Input 
                            label="Last name:"
                            id="lastname"
                            name="lastname"
                            type="text"
                            placeholder="Last name"
                            rounded="2rem"
                        />

                        </div>

                        <div className="mb-3">
                        <label className="mb-2" htmlFor="name">Email:<span className="text-danger">*</span>
                        </label>
                        <Input 
                            label="Email:"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                            rounded="2rem"
                            />
                        </div>
                        </form>
                        <div className="d-flex justify-content-center">
                            <Button title="CHANGE DATA" bgColor="#3DC2DD" textColor="#ffffff" fontWeight="400" rounded="10px" />
                        </div>
                    </div>
                    <div className="col-10 col-md-5">
                        <h2 className="fw-bold mb-4">Change Password</h2>
                        <form>
                        <div className="mb-3">
                            <label className="mb-2" htmlFor="name">Current password:
                                    <span className="text-danger">*</span>
                                </label>
                            <Input
                                id="currentPass"
                                name="currentPass"
                                type="password"
                                placeholder="********"
                                rounded="2rem"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2" htmlFor="name">New password:<span className="text-danger">*</span>
                            </label>
                            <Input 
                            id="newPass"
                            name="newPass"
                            type="password"
                            placeholder="********"
                            rounded="2rem"
                        />
                    </div>

                    <div className="mb-3">
                            <label className="mb-2" htmlFor="name">Confirm password:<span className="text-danger">*</span>
                            </label>
                        <Input
                            id="confirmPass"
                            name="confirmPass"
                            type="password"
                            placeholder="********"
                            rounded="2rem"
                        />
                    </div>
                        </form>
                        <div className="d-flex justify-content-center">
                            <Button title="CHANGE PASSWORD" bgColor="#3DC2DD" textColor="#ffffff" fontWeight="400" rounded="10px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount;