import  React from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import SearchIcon from "/public/icons/search.svg";

export const FormInput = React.forwardRef(({ id, name, label, type, placeholder, ...rest }, ref) => {
    const { register, formState: { errors }, watch } = useFormContext();
    const error = errors[name];
    const value = watch(name); // Obtengo el valor actual del campo
    const hasData = !!value; // Verifico si el  campo tiene datos

    return (
        <div className="mb-3">
            <div>
                <label htmlFor={id} className="form-label">
                    {label}<span className="text-danger">*</span>
                </label>
                <input 
                    id={id}
                    ref={ref}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={`form-control rounded-5 ${error ? "border border-2 border-danger" : "" } ${hasData ? "bg-aliceblue" : ""}`}

                    
                    {...register(name)}
                    {...rest}
                />
            </div>
            <div className="text-center">
                { error && <small className="text-danger">{error.message}</small> }
            </div>
        </div>
    );
});

export const SearchBar = ({ placeholder, onChange}) => {
    return (
      <div className="position-relative w-100" style={{ maxWidth: "60%"}}>
        <input className="form-control me-2 rounded-5 border-2 border-dark shadow-sm" style={{backgroundColor: "#D7E3FC" }} type="search" placeholder={placeholder} aria-label="Search" onChange={ onChange } />
        <span className="position-absolute top-50 end-0 translate-middle-y me-3">
          <Image src={SearchIcon} alt="search icon" width={20} height={20} />
        </span>
    </div>
    );
  };

FormInput.displayName = 'FormInput';

export const InputRadio = React.forwardRef(({ id, name, value, label, checked, ...rest }, ref) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <>
        <div className="form-check">
            <input 
            {...register(name)}
            type="radio"
            ref={ref}
            className={`form-check-input ${error ? "border border-2 border-danger" : "" }`}
            id={id}
            value={value}
            checked={checked}
            {...rest}
            />
            <label htmlFor={id} className="form-check-label ms-2">
                {label}
            </label>
        </div>

       {/* { error && (<div className="text-center">
            <small className="text-danger">{ error.message }</small>
        </div>)} */}
            </>
    )
})

InputRadio.displayName = "InputRadio";