import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import Card from "../components/Card";

export default function Home(props) {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const user = useAuthentication();

  useEffect(() => {
    const url = `https://classproxy.rtoal.repl.co/yts?term=${name}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setData(r);
      })
      .catch((e) => setData(e));
  }, [name])

  return (
    <div className="App">
      <header className="App-header">
        Activity Finder
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {user && (
        <div>
          <SearchBar action={setName} />

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
      )}
      
    </div>
  );
}
