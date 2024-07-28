const Eye = ({ color, bgColor, title, width, height, fontSize }) => {
    return (
        <span className="rounded-5 p-1 fw-bold text-center align-content-center" style={{ backgroundColor: bgColor, color: color, width: width, height: height, fontSize: fontSize }}>{ title }</span>
    )
}

export default Eye;