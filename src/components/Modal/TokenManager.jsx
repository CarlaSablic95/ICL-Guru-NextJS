"use client";

import { Input } from "../Inputs/Input";
import Button from "@/components/Button/Button2";
import Accounts from "@/app/account/page";

const TokenManager = () => {
    return (
        <>
            <section className="container px-5 py-4 mx-auto">
                <h1 className="text-center">Nombre de la clínica</h1>
                <h2 className="text-center">Token manager</h2>

                <div className="d-flex justify-content-end">
                    <Button  title="Save Token" bgColor="#59B03D" textColor="#ffffff" marginRight="2rem" />
                    <Button  title="Generate new token" bgColor="#3DC2DD" />
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="token">Access Token</label>
                <Input 
                    name="token"
                    id="token"
                    type="text"
                    placeholder="TOKEN"
                />
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="token">Endpoint</label>
                <Input 
                    name="token"
                    id="token"
                    type="text"
                    placeholder="http://iclcalc.zaldivarconcep.com/calculation/upload/sonomed-data-3f-1v/"
                    disabled
                />
                </div>
            </section>

            <Accounts />
        </>
    )
}

export default TokenManager;