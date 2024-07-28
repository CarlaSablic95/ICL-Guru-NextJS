const Button2 = ({ title, type, bgColor, textColor, textTransform, rounded, width, height, fontWeight }) => {
    return ( 
        <button type={ type } className="btn py-2 px-4 border-0 text-uppercase" style={{ backgroundColor: bgColor, color: textColor, textTransform: textTransform, borderRadius: rounded, width: width, height: height, fontWeight: fontWeight, fontSize:"16px" }}>{ title }</button>
    )
}

export default Button2;