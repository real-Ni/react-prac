
function List () {
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "banana", calories: 100}, 
                    {id: 3, name: "orange", calories: 105}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse alpha order
    // fruits.sort((a,b) => a.calories - b.calories); // order of calories
    // fruits.sort((a,b) => b.calories - a.calories); // reverse order of calories

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100).sort((a,b) => a.calories - b.calories);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100).sort((a,b) => b.calories - a.calories);


    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    const listItemL =  lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)
    const listItemH =  highCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)
    return (<><ol>{listItems}</ol>
        <ul>{listItemL}</ul>
        <ul>{listItemH}</ul>
        </>
    );
}

export default List