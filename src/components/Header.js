import PropTypes from 'prop-types'
import Button from './Button' 

const Header = ({title, onAdd, showAddTask}) => {
   const onClick = (e) => {

   }

    return (
        <header>
            <h1 className="inline-block text-4xl font-bold">{title}</h1>
            <div className="inline-block float-right flex-grow">
            <Button className={showAddTask ? "w-20 h-10 bg-red-700 rounded-xl border-rounded-xl hover:bg-red-600 hover:text-white text-gray-50 font-bold" : "w-20 h-10 bg-green-700 rounded-xl border-rounded-xl hover:bg-green-600 hover:text-white text-gray-50 font-bold"} text={showAddTask ? 'Close' : 'Add'} color='blue' onClick={onAdd}/>
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

