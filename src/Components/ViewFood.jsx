import { useEffect, useState } from "react";
import styles from ".././Components/assets/css/styles.module.css";

export default function ViewFood({ selectedFoodId }) {
  const [userselectedFood, setuserSelectedFood] = useState({});
  const [isloadingState, setloadingState] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${selectedFoodId}/information`;
  const API = "your-api-key-here";
  useEffect(() => {
    async function getSelectedFoodItem() {
      const response = await fetch(`${URL}?apiKey=${API}`);
      const data = await response.json();
      setuserSelectedFood(data);
      setloadingState(true);
    }
    getSelectedFoodItem();
  }, [selectedFoodId]);

  return (
    <div className={styles.ViewFoodTab}>
      {isloadingState ? (
        <div className={styles.centeredImageContainer}>
          <img
            src="../src/components/assets/images/loader.gif"
            alt="loading..."
            className={styles.loaderimage}
          />
        </div>
      ) : (
        <>
          <div className={styles.ImageTab}>
            <img
              src={userselectedFood.image}
              className={styles.foodImage}
              alt={userselectedFood.title}
            />
          </div>
          <h2>{userselectedFood.title}</h2>
          <h4>🍽️ About the Dish </h4>
          <p
            className={styles.foodDescription}
            dangerouslySetInnerHTML={{ __html: userselectedFood.summary }}
          />
          <h4>Ingredients</h4>
          {isloadingState ? (
            "Loading..."
          ) : (
            <ol className={styles.ingredients}>
              {[
                ...new Set(
                  userselectedFood.extendedIngredients.map(
                    (ingredient) => ingredient.nameClean
                  )
                ),
              ].map((uniqueIngredient, index) => (
                <a
                  href={`https://www.google.com/search?q=${uniqueIngredient}`}
                  key={index}
                >
                  <li>{uniqueIngredient}</li>
                </a>
              ))}
            </ol>
          )}
          <h4>Quick guide to make a delicious {userselectedFood.title}.</h4>

          {isloadingState ? (
            "Loading..."
          ) : (
            <ul>
              {userselectedFood.analyzedInstructions[0].steps.map(
                (procedures, index) => (
                  <li key={index}>{procedures.step}</li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
