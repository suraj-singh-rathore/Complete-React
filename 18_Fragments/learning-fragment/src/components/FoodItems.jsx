const FoodItems = () => {

    let FoodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

    return(
        <ul className="list-group">
      {FoodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul>
    );
}

export default FoodItems;