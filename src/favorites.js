export const favoriteButton = () => {
  const [favorite, setFavorite] = useState([]);
};
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
let findfavorite = recipes.filter((recipe) => favorite.includes(recipe.id));
