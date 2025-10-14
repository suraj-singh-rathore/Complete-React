
function App() {
  let fooditems = ["Dal", "Green Vegetable", "Bread", "Milk", "Sprouts"];

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