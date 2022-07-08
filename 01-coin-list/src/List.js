import React from "react";

const List = ({ coin, removeItem }) => {
  //Now Year
  let year = new Date().getFullYear();
  // Remove Coin

  return (
    <>
      {coin.map((coin) => {
        const { id, name, code, releaseDate, image } = coin;
        return (
          <article key={id} className="coin">
            <img src={image} alt={name} />
            <div>
              <h4>
                {name} - ({code})
              </h4>
              <p>{year - releaseDate} years</p>
              <button className="remove--button" onClick={() => removeItem(id)}>
                Remove {name}
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
