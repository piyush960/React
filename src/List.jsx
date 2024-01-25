
import PropTypes from 'prop-types'

function List(props){

    const Items = props.items

    const sortedItems = Items.sort((a, b) => {
        return a.calories - b.calories
    })

    const listItems = sortedItems.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);

    

    return(
        <>
        <h2>{props.category}</h2>
        <ol>{listItems}</ol>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    // assigning proptypes to values in an array of objects
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        calories: PropTypes.number,
        name: PropTypes.string
    }))
}

List.defaultProps = {
    category: 'Category',
    items: []
}

export default List