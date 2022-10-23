import styles from "./Joke.module.css";

const Joke = (props) => {
  return <div className={styles.joke}>{props.joke}</div>;
};

export default Joke;
