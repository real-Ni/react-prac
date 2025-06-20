import PropTypes from 'prop-types'

function List2 ({category = "Category", items = []}) {

    
    const itemList = items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
    return(
        <>
        <h3>{category}</h3>
        <ul>{listItems}</ul></>
    );
}

List2.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
}


export default List2