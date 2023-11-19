import { useState } from "react";
import styles from ".././Components/assets/css/styles.module.css";
import Header from "./Header";
import SearchRecipe from "./SearchRecipe";
import FoodCards from "./FoodCards";
import ViewFood from "./ViewFood";

export default function FoodRecipe() {
  const [searchFood, setFood] = useState([]);
  const [selectedFoodId, setFoodId] = useState("");
  const dispayItem = selectedFoodId != "" ? <ViewFood selectedFoodId={selectedFoodId} /> : "";
  return (
    <>
      <Header />
      <SearchRecipe searchFood={searchFood} setFood={setFood} />
      <div className={styles.FoodListContainer}>
        {searchFood.map((item, index) => (
          <FoodCards
            key={index}
            foodid={item.id}
            foodname={item.title}
            foodimage={item.image}
            setFoodId={setFoodId}
          />
        ))}
      </div>
      {dispayItem}
    </>
  );
}
