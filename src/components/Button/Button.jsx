import Image from "next/image";

const Button = ({
  title,
  type,
  bgColor,
  textColor,
  textTransform,
  rounded,
  icon,
  width,
  height,
  fontWeight,
  onClick,
}) => {
  return (
    <button
      type={type}
      className="btn py-2 px-4 border-0"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        textTransform: textTransform,
        borderRadius: rounded,
        width: width,
        height: height,
        fontWeight: fontWeight,
      }}
      onClick={onClick}
    >
      {title} <Image src={icon} alt="icon" width="20" height="20" />
    </button>
  );
};

export default Button;
