import React, { useEffect, useState } from "react";
import "../App.css";
import { Character } from "../Services/FetchServices";
import translate from "translate";

export const Card: React.FC<{ char: Character }> = ({ char }) => {
  const [textoTraduzido, setTextoTraduzido] = useState("");

  useEffect(() => {
    async function traduzirTexto() {
      if (char.description) {
        try {
          const traducao = await translate(char.description, { from: "es", to: "pt" });
          setTextoTraduzido(traducao);
        } catch (error) {
          console.error("Erro ao traduzir:", error);
        }
      }
    }
    traduzirTexto();
  }, [char.description]);

  return (
    <div className="main-content">
      <div className="container">
        <div id="nome_p" className="nome">
          {char.name}
        </div>
        <div className="info">
          <div id="foto" className="foto">
            <img className="foto_div" src={char.image} alt={char.name} />
          </div>
          <div className="stats">
            <div className="ki">
              <div id="ki">Ki: {char.ki}</div>
              <div id="ki_max">Max Ki: {char.maxKi}</div>
            </div>
            <div className="race">
              <div id="race">Raça: {char.race}</div>
              <div id="gender">Gênero: {char.gender}</div>
            </div>
          </div>
        </div>
        <div className="description">
          <div id="description" className="text_description">
            <p>{textoTraduzido || char.description}</p>
          </div>
        </div>
        <div className="affiliation">
          <div id="affiliation" className="text_affiliation">
            {char.affiliation}
          </div>
        </div>
      </div>
    </div>
  );
};
