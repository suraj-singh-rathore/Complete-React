import Item from "./Item"

const FoodItems = () => {

    let FoodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

    return(
        <ul className="list-group">
      {FoodItems.map((item) => (
        <Item key={item} FoodItem={item}></Item>
      ))}
      </ul>
    );
}

export default FoodItems;