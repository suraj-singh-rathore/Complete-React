

function App() {
  // let fooditems = [];
  let fooditems = ["Dal", "Green Vegetable", "Bread", "Milk", "Sprouts"];

  if(fooditems.length === 0) {
     return <h3>I am still hungry.</h3>
  }

  return (
<>
    <h1>Healthy Food</h1>
    <ul className="list-group">
    {fooditems.map((item) => (
      <li key={item} className="List-group-item">{item}</li>
    ))}
  </ul>
</>
  );
    
}

export default App;