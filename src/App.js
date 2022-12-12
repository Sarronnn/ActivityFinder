import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import favorites from "./favorites";
import Card from "./Card";
export default function App() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle((toggle) => !toggle);

  useEffect(() => {
    const url = `https://classproxy.rtoal.repl.co/yts?term=${name}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);

        setData(r);
      })
      .catch((e) => setData(e));
  }, [name]);

  return (
    <div className="App">
      <header className="App-header">Activity Finder</header>

      <SearchBar action={setName} />
      {/*
      <button id="tabFav" onClick={favorites}>
        Favorites
      </button>
      <button id="tabSearch"> Search </button>
 
  */}
      <section className="cards-container">
        {!data ? (
          <li>No businesses yet</li>
        ) : (
          data?.businesses?.map((business) => (
            <Card business={business} key={business.id} />
          ))
        )}
      </section>
    </div>
  );
}
