"use client";

import BaseForm from "@/components/Form/BaseForm";
import { Input1 } from "@/components/Inputs/Inputs";
import Button2 from "@/components/Button/Button2";

const MyAccount = () => {
    
    return (
        <section className="col-12 col-md-11 py-4 px-3 px-md-5 mx-auto">
            <h1 className="text-center text-uppercase fw-bold">My account</h1>
                <div className="container">
                <div className="row justify-content-evenly pt-4">
                    <div className="col-10 col-md-5 mb-5 mb-md-3">
                        <h2 className="fw-bold">Personal Data</h2>
                        <BaseForm>
                        <Input1 
                            label="Name:"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="First name"
                        />

                            <Input1 
                            label="Last name:"
                            id="lastname"
                            name="lastname"
                            type="text"
                            placeholder="Last name"
                        />

                        <Input1 
                            label="Email:"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                        />
                        </BaseForm>
                        <div className="d-flex justify-content-center">
                            <Button2 title="CHANGE DATA" bgColor="#3DC2DD" textColor="#ffffff" fontWeight="400" rounded="10px" />
                        </div>
                    </div>
                    <div className="col-10 col-md-5">
                        <h2 className="fw-bold">Change Password</h2>
                        <BaseForm>
                        <Input1 
                            label="Current password:"
                            id="currentPass"
                            name="currentPass"
                            type="password"
                            placeholder="********"
                        />

                            <Input1 
                            label="New Password:"
                            id="newPass"
                            name="newPass"
                            type="password"
                            placeholder="********"
                        />

                        <Input1 
                            label="Confirm Password:"
                            id="confirmPass"
                            name="confirmPass"
                            type="password"
                            placeholder="********"
                        />
                        </BaseForm>
                        <div className="d-flex justify-content-center">
                            <Button2 title="CHANGE PASSWORD" bgColor="#3DC2DD" textColor="#ffffff" fontWeight="400" rounded="10px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount;