import React, { useState } from "react";
export default function Favorites(term) {
  const [favorite, setFavorite] = useState([]);
  const addToFavorite = (id) => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };
  const removeFavorite = (id) => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };
  return (
    <button onClick={() => addToFavorite(term.id)}>add to favorite</button>
  );

  // this one does the exact opposite, it removes the favorite recipe id's
}
