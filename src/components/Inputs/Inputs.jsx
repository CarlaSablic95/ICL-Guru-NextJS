import Image from "next/image";
import SearchIcon from "/public/icons/search.svg";

export const Input = ({ label, name, type, placeholder, defaultValue }) => { // onChange // Faltaria value

    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
          <span className="text-danger">*</span>
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="form-control"
        />
      </div>
    );
  };

  export const Input1 = ({ label, name, type, placeholder, defaultValue }) => { // onChange // Faltaria value

    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="form-control"
        />
      </div>
    );
  };
  
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
  
  export const InputRadio = ({ id, name, label, defaultValue}) => {
    return (
      <div className="form-check mb-3">
        <label htmlFor={id} className="form-check-label me-3">
          {label}
        </label>
            <input
              type="radio"
              id={id}
              name={name}
              defaultValue={defaultValue}
              className="form-check-input"
              required
            />
      </div>
    );
  };
  
  export const InputCheckbox = ({ id, label, name, defaultValue, bgColor, onChange}) => {
    return (
      <div className="form-check">
        <label className="form-check-label fw-bold" htmlFor={id}>
         <span className="rounded-5 p-1 text-white fw-bold" style={{backgroundColor: bgColor}}> {label}</span>
        </label>
            <input
              type="checkbox"
              id={id}
              name={name}
              defaultValue={defaultValue}
              className="form-check-input pe-0"
              onChange={onChange}
              style={{ cursor: "pointer" }}
            />
  </div>
    );
  };
  
