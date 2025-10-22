const FoodItems = () => {

    let FoodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

    return(
        <ul className="list-group">
      {FoodItems.map((item) => (
        <item key={item} FoodItem={item}></item>
      ))}
      </ul>
    );
}

export default FoodItems;