import PropTypes from 'prop-types'
import Button from './Button' 

const Header = ({title}) => {
   const onClick = (e) => {
        console.log("clicke")
   }

    return (
        <header>
            <h1 className="inline-block text-4xl font-bold">{title}</h1>
            <div className="inline-block float-right flex-grow">
            <Button className={"w-20 h-10 bg-green-700 rounded-xl border-rounded-xl hover:bg-green-600 hover:text-white text-gray-50 font-bold"} text='Add' color='blue' onClick={onClick}/>
            </div>    
        </header>
    )
}

Header.defaultProps = {
   title: 'Task Tracker', 
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header

