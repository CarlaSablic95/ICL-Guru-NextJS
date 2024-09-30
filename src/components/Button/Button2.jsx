const Button2 = ({
  title,
  type,
  bgColor,
  colorFont,
  border,
  textTransform,
  rounded,
  width,
  height,
  fontWeight,
  marginRight,
  marginLeft,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className="btn py-2 px-4"
      style={{
        backgroundColor: bgColor,
        color: colorFont,
        textTransform: textTransform,
        borderRadius: rounded,
        border: `1px solid ${border}`,
        width: width,
        height: height,
        fontWeight: fontWeight,
        fontSize: "16px",
        marginRight: marginRight,
        marginLeft: marginLeft,
        onClick: onClick,
      }}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button2;
