import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  // const [id, setId] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://classproxy.rtoal.repl.co/meghan?location=Boston')
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, []);

  return (
    <div className="App">  
       {JSON.stringify(data)}
    </div>
  )

}

