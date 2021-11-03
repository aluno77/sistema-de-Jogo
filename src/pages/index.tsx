import styles from "../styles/formulario.module.css";
import Cartao from "../Components/Cartao";

import Link from "next/link";
import React, { useState } from "react";
import EntradaNumerica from "./../Components/EntradaNumerica";

export default function Formulario() {
  const [qtdeportas, setQtdeportas] = useState(3);
  const [compresente, setCompresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div style={{ backgroundColor: "yellow", padding: "20px" }}>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdeportas}
            onChange={(novaQtde) => setQtdeportas(novaQtde)}
          />
        </Cartao>
      </div>

      <div style={{ backgroundColor: "blue", padding: "20px" }}>
        <Cartao>
          <EntradaNumerica
            text="Portas com Presente?"
            value={compresente}
            onChange={(novaPortaComPresente) =>
              setCompresente(novaPortaComPresente)
            }
          />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdeportas}/${compresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
