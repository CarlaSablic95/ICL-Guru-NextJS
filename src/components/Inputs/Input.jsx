"use client";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import SearchIcon from "/public/icons/search.svg";
export const Input = ({
  name,
  type,
  rules,
  placeholder,
  defaultValue,
  disabled,
}) => {
  const formContext = useFormContext();
  const { register, formState } = formContext || {};
  const errors = formState?.errors || {};

  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...(formContext ? register(name, rules) : { name })}
        className={`form-control ${
          errors[name] ? "border border-2 border-danger" : ""
        }`}
        style={{ borderRadius: "2rem" }}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errors[name] && (
        <div className="text-center">
          <small className="text-danger fw-bold">{errors[name].message}</small>
        </div>
      )}
    </>
  );
};

export const InputRadio = ({ id, name, value, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <>
      <div className="form-check">
        <label htmlFor={id} className="form-check-label ms-2">
          {label}
        </label>
        <input
          {...register(name, { required: "Please choose 'Female' or 'Male'" })}
          type="radio"
          className={`form-check-input ${
            error ? "border border-2 border-danger" : ""
          }`}
          id={id}
          name={name}
          value={value}
        />
      </div>
    </>
  );
};

export const Select = ({ name, rules, defaultValue, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <>
      <select
        {...register(name, rules)}
        className={`form-select ${
          error ? "border border-2 border-danger" : ""
        }`}
        defaultValue={defaultValue}
        aria-label={`Select ${name}`}
      >
        <option value="">Select one clinic</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="text-center">
          <small className="text-danger fw-bold">{error.message}</small>
        </div>
      )}
    </>
  );
};

export const InputCheckbox = ({
  id,
  name,
  defaultValue,
  bgColor,
  onChange,
  label,
  checked,
}) => {
  return (
    <div className="form-check" style={{ marginLeft: "10px" }}>
      <label className="form-check-label fw-bold" htmlFor={id}>
        <span
          className="rounded-5 p-1 text-white fw-bold"
          style={{ backgroundColor: bgColor }}
        >
          {label}
        </span>
      </label>
      <input
        id={id}
        name={name}
        type="checkbox"
        style={{ cursor: "pointer" }}
        className="form-check-input pe-0"
        onChange={onChange}
        defaultValue={defaultValue}
        checked={checked}
      />
    </div>
  );
};

export const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="position-relative w-100 search-bar">
      <input
        className="form-control me-2 rounded-5 border-2 border-dark shadow-sm"
        style={{ backgroundColor: "#D7E3FC" }}
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        onChange={onChange}
      />
      <span className="position-absolute top-50 end-0 translate-middle-y me-3">
        <Image src={SearchIcon} alt="search icon" width={20} height={20} />
      </span>
    </div>
  );
};
