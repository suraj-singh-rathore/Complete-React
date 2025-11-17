import style from "./item.module.css";

const Item = (props) => {
    let {FoodItem} = props;

    return(
        <li className="list-group-item 
        my-item"><span className="my-span">{FoodItem}</span>
        <button className={`${tyle.button} btn-info`}>Buy</button>
        </li>
    );
};

export default Item;