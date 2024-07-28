const Button = ({ title, type, bgColor, textColor, textTransform, rounded }) => {
    return ( 
        <button type={ type } className="btn py-2 px-4 border-0" style={{ backgroundColor: bgColor, color: textColor, textTransform: textTransform, borderRadius: rounded }}>{ title }</button>
    )
}

export default Button;