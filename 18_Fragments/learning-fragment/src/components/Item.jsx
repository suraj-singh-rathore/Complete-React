const Item = (props) => {
    let {FoodItem} = props;

    return <li className="list-group-item">{FoodItem}</li>;
};

export default Item;