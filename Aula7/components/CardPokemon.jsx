import styles from './CardPokemon.module.css';

export function CardPokemon({ nome, foto, tipo, poder, numero }) {
  return (
    <div className={styles.card}>
      <img src={foto} alt={nome} className={styles.foto} />
      <h3 className={styles.numero}><strong>Nº</strong>{numero}</h3>
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.texto}>Tipo: {tipo}</p>
      <p className={styles.texto}>Poder: {poder}</p>
    </div>
  );
}