const Button = ({
  title,
  type,
  bgColor,
  textColor,
  rounded,
  textTransform,
  disabled,
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
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
