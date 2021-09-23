import PropTypes from 'prop-types'

const Button = ({text, className, onClick}) => {
    return <button className={className} onClick={onClick}>{text}</button>
    
}

Button.defaultProps = {
    title: 'Add',
    color: 'green',
}

Button.propsTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button