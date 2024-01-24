import PropTypes from 'prop-types'


function Student(props){
    return(
        <div className="student">
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

Student.defaultProps = {
    name: 'guest',
    age: 0
}

export default Student