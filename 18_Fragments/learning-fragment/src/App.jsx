//18. Fragments:-

// function App() {
//   return (
//   <>
//   <h1>Healthy Food</h1>
//     <ul className="list-group">
//       <li className="list-group-item">Dal</li>
//       <li className="list-group-item">Green Vegetable</li>
//       <li className="list-group-item">Bread</li>
//       <li className="list-group-item">Milk</li>
//        <li className="list-group-item">Sprouts</li>
//      </ul>
//     </>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////

//19. Map Method:-

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Bread", "Milk", "Sprouts", "Ghee"];

  return (
    <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul>
    </>
  );
}

export default App;