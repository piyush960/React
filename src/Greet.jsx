
import PropTypes from 'prop-types'

function Greet(props){

    const username = <h2>
                        Welcome, {props.username}
                    </h2>
    
    const loginNotify = <h2>
                        Please login to continue !!
                    </h2>

    return(props.isLoggedin ? username : loginNotify)


}

Greet.propTypes = {
    username: PropTypes.string,
    isLoggedin: PropTypes.bool
}

Greet.defaultProps = {
    username: "Guest",
    isLoggedin: false
}

export default Greet