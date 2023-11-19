import styles from ".././Components/assets/css/styles.module.css";

export default function FoodCards({ foodid, foodname, foodimage, setFoodId }) {
  function viewSelectedItem(getId) {
    setFoodId(getId);
  }
  return (
    <div className={styles.FoodCards}>
      <div className={styles.foodImageCards}>
        <img src={foodimage} className={styles.foodImage} alt="" />
      </div>
      <div className={styles.detailsTab}>
        <p>{foodname}</p>
        <button onClick={() => viewSelectedItem(foodid)}>View</button>
      </div>
    </div>
  );
}
