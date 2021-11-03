import styles from "../../../styles/jogo.module.css";
import React, { useEffect, useState } from "react";
import Porta from "../../../Components/Porta";
import { atualizarPortas, CriarPortas } from "../../../Functions/Portas";

import Link from "next/link";
import { useRouter } from "next/router";

function Jogo() {
  const router = useRouter();
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortaValidas = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;
    
    setValido(qtdePortaValidas && temPresenteValido) 
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(CriarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
          {valido ?
            renderizarPortas() :
            <h1>Valores inválidos</h1>
          }
       </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar o Jogo.</button>
        </Link>
      </div>
    </div>
  );
}

export default Jogo;
