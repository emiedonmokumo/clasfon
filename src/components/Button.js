import '../styles/button.css'

const Button = ({ url, title}) =>{
    return (
        <a href={url} className="link-btn">{title}</a>
    )
};

export default Button;