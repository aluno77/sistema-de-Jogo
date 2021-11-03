import PortaModel from "../model/Portas";

export function CriarPortas(qtde: number, portaComPresebte: number): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresebte;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(portas: PortaModel[],portaModificada: PortaModel) {
 
  return portas.map((portaAtual) => {
    const igualModificada = portaAtual.numero === portaModificada.numero;

      if (igualModificada) {
        return portaModificada;
      } else {     
        return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
      }
  });
}
