//18. FRAGMENTS:-

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

//19. MAP METHOD:-

// function App() {
//   let foodItems = ["Dal", "Green Vegetables", "Bread", "Milk", "Sprouts", "Ghee"];

//   return (
//     <>
//     <h1>Healthy Food</h1>
//     <ul className="list-group">
//       {foodItems.map((item) => (
//         <li key={item} className="list-group-item">{item}</li>
//       ))}
//     </ul>
//     </>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONDITIONAL STATEMENT:-
// if-else statement:-

// function App() {
//   let foodItems = [];
//   //let foodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

//   if (foodItems.length === 0) {
//     return <h3>No food items are available.</h3>;
//   }

//   return (
//     <>
//     <h1>Healthy Food</h1>
//     <ul className="list-group">
//       {foodItems.map((item) => (
//         <li key={item} className="list-group-item">{item}</li>
//       ))}
//       </ul> 
//     </>
//   )
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// TERNARY OPERATOR:-

function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Ghee", "Bread", "Milk", "Sprouts"];

  let emptyMessage = foodItems.length === 0 ? <h3>No items are available</h3> : null;

  return (
    <>
    <h1>Healthy Food</h1>
    {emptyMessage}
    {/* {foodItems.length === 0 ? <h3>No items are available.</h3> : null} */}
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul> 
    </>
  )
}

export default App;