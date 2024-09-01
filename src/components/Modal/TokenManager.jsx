"use client";

import { Input } from "../Inputs/Input";
import Image from "next/image";
import Button from "@/components/Button/Button2";
import CopyButton from "@/components/Button/Button";
import Accounts from "@/app/account/page";
import ArrowBack from "/public/icons/arrow-back.png";
import ClipboardCheck from "/public/icons/clipboard-check.svg";

const TokenManager = ({ onReturn }) => {
    const endpointCopy = () => {
        const endpointInput = document.getElementById("endpoint");

        if(endpointInput) {
            navigator.clipboard.writeText(endpointInput.value)
            .then(() => {
                console.log("ENDPOINT COPIADO AL PORTAPAPELES");
            })
            .catch((error) => {
                console.error("Error al copiar el endpoint: ", error);
            });
        } else {
            console.log("No se encontró el campo de endpoint");
        }
    }


    return (
        <>
        <span className="d-block p-2">
            <a onClick={ onReturn } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
        </span>
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

                <div className="d-flex align-items-center">
                    <div className="mb-3 col-6">
                    <label htmlFor="endpoint">Endpoint</label>
                <Input 
                    name="endpoint"
                    id="endpoint"
                    type="text"
                    placeholder="http://iclcalc.zaldivarconcep.com/calculation/upload/sonomed-data-3f-1v/"
                    defaultValue="http://iclcalc.zaldivarconcep.com/calculation/upload/sonomed-data-3f-1v/"
                    disabled
                />
                </div>
                <CopyButton bgColor="Green" marginLeft="15px" onClick={ endpointCopy } icon={ ClipboardCheck }></CopyButton>
                </div>
                
            </section>

            <Accounts />
        </>
    )
}

export default TokenManager;