import FoodItems from "./FoodItems";
import style from "./item.module.css";

// const Item = (props) => {
//     let {FoodItem} = props;

//     return(
//         <li className="list-group-item 
//         my-item"><span className="my-span">{FoodItem}</span>
//         <button className={`${style.button} btn btn-info`}
//         onClick={() => console.log(`${FoodItem} being bought`)}
        
//         >Buy</button>
//         </li>
//     );
// };

// export default Item;

//  //Passing Functions via props:-

const Item = ({ FoodItem, handleBuyButton }) => {
         
    return (
        <li className={`${style["kg-item"]} list-group-item`}>
            <span className={style["my-span"]}>{FoodItem}</span>
            <button className={`${style.button} btn btn-info`}
            onClick={handleBuyButton}>
                Buy
            </button>
        </li>
    );
};

export default Item;