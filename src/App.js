import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Joke from "./components/Joke";
import LoadingSpinner from "./components/LoadingSpinner";
import Search from "./components/Search";
import useHttp from "./hooks/use-http";
import Error from "./components/Error";
const url = "https://yomamma-api.cyclic.app/jokes";
const url2 = "https://yomamma-api.cyclic.app/search";

function App() {
  const searchRef = useRef();
  const myRequest = useHttp();
  const clickHandler = () => {
    const searchQuery = searchRef.current.value;
    if (searchQuery === "") myRequest.get({ url });
    else {
      myRequest.get({ url: url2, params: { query: searchQuery } });
    }
  };
  useEffect(() => {
    myRequest.get({ url });
    // myRequest.get2(url);
  }, []);
  let content;
  if (myRequest.loading) content = <LoadingSpinner />;
  else if (
    !myRequest.error &&
    !myRequest.loading &&
    myRequest.data &&
    myRequest.data.joke
  )
    content = <Joke joke={myRequest.data.joke} />;
  else if (
    !myRequest.error &&
    !myRequest.loading &&
    myRequest.data &&
    myRequest.data.results
  )
    content = (
      <Joke
        joke={
          myRequest.data.results[
            Math.floor(Math.random() * myRequest.data.results.length)
          ]
        }
      />
    );
  else if (myRequest.error) content = <Error error={myRequest.error} />;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Yo Mamma Jokes</div>
      <Search searchRef={searchRef} />
      <button onClick={clickHandler} className={styles.getJoke}>
        Get Joke
      </button>
      {content}
      <footer>
        <a href="https://github.com/thecurious1-sudo/yomamma">
          <img src="/github.png" />
        </a>
      </footer>
    </div>
  );
}

export default App;
