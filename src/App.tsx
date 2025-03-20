import "./App.css";
import React, { useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { Character, fetchChar } from "./Services/FetchServices";

export const App = () => {
  const [chars, setChars] = useState<Character[] | null>(null);

  const fetchData = async () => {
    const data = await fetchChar();
    setChars(data?.items || null);
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <header className="header">
        <h1 className="topo">Dragonball</h1>
      </header>
      <div className="content">
        <div className="sidebar">
          <h2>Sidebar</h2>
        </div>
        <div className="flex flex-row gap-6 flex-wrap">
          {chars?.map((char: Character) => {
            return <Card char={char} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
