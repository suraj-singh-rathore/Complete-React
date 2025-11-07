const Item = (props) => {
    let {FoodItem} = props;

    return <li className="list-group-item 
    my-item"><span className="my-span">{FoodItem}</span></li>;
};

export default Item;