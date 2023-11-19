import { useEffect, useState } from "react";
import styles from ".././Components/assets/css/styles.module.css";
import * as emoji from "node-emoji";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API = "your-api-key-here";

export default function SearchRecipe({ searchFood, setFood }) {
  const [query, setQuery] = useState("");
  var placeholder = "Search Here ... " + emoji.get("pizza");

  //syntax firstparameter,:callback function,second parameter,array.
  //to be noted useEffect function calls  when dom loads.
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await response.json();
      setFood((searchFood = data.results));
    }
    fetchFood();
  }, [query]);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchBox}
        placeholder={placeholder}
      />
    </>
  );
}
