import styles from "../styles/cartao.module.css";

interface ICartaoProps {
  bgcolor?: string;
  children?: any;
}

function Cartao(props: ICartaoProps) {
  return (
    <div
      className={styles.cartao}
      style={{
        backgroundColor: props.bgcolor ?? "#fff",
      }}
    >
      {props.children}
    </div>
  );
}

export default Cartao;
