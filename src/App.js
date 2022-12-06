import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  // const [id, setId] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://classproxy.rtoal.repl.co/meghan?location="Los Angeles"')
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, []);

  return (
    <div className="App">  
      <section>
        {
          !data ? <li>No businesses yet</li> :

          data?.businesses?.map(business =>
            <div className="business" key={business.id}>
              <div>
                <div className="business_name">{business.name}</div>
                <div>{business.price}</div>
                <div className="business_address">
                  <div>{business.location.address1}</div>
                  <div>{business.location.address2}</div>
                  <div>{business.location.address3}</div>
                  <div>{business.location.city}</div>
                </div>
                <div>{business.display_phone}</div>
                <div>Rating: {business.rating}/5</div>
              </div>
              <div className="business_image">
                <img src={business.image_url} width="125"/>
              </div>
            </div>
          )
        }
      </section>
    </div>
  )

}

