import { fetchFavorites } from "../services/favoritesService";
import { useEffect, useState } from "react";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

export default function Favorites(props) {
  const [data, setData] = useState("");
  const user = useAuthentication();

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchFavorites();
      setData(fetchedData);
      console.log(fetchedData);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Activity Finder
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {user && (
        <div>
          <section className="cards-container">
            {!data ? (
              <li>No businesses yet</li>
            ) : (
              <div>
                <p>You favorited:</p>
                <ul>
                  {data.map((business) => (
                    <li key={business.id}>{business.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
