import Image from "next/image";

const ButtonModal = ({ dataBsTarget, title, icon }) => {
    return ( 
        <button type="button" className="btn button rounded-5 ms-4 fw-bold" data-bs-toggle="modal" data-bs-target={dataBsTarget}>{ title } <Image src={icon} alt="Icon" width={35} height={35} /> </button>
    )
}

export default ButtonModal;