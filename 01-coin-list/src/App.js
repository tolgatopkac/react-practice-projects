import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [coin, setCoin] = useState(data);

  const listButton = () => {
    if (coin === data) {
      setCoin([]);
    } else {
      setCoin(data);
    }
  };

  const removeItem = (id) => {
    let newCoins = coin.filter((item) => item.id !== id);
    setCoin(newCoins);
    console.log(setCoin(newCoins));
  };

  return (
    <main>
      <section className="container">
        <h3>Top {coin.length} List</h3>
        <List coin={coin} removeItem={removeItem} />
        <button className="add--button" onClick={listButton}>
          Clear List/List
        </button>
      </section>
    </main>
  );
}

export default App;
