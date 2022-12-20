import './Button.css'

const Button = ({ backgroundColor, bootstrap, handleClick, children }) => {
    // const { handleClick, label } = props

    return (
        <div>
            <button 
                className={`Button ${bootstrap}`}
                style={{ backgroundColor }} 
                onClick={handleClick}
            >{children}</button>
        </div>
        
    )
}

export default Button