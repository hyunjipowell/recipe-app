const meals = document.querySelector("#meals");

getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];
  console.log(randomMeal);

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const meal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  );
}

async function getrMealBySearch(term) {
  const meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term
  );
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");

  meal.classList.add("meal");

  meal.innerHTML = `
<div class="meal-header">
${random ? `<span class="random"> Random Recipe </span>` : ""}
  <img
    src="${mealData.strMealThumb}"
    alt="${mealData.strMeal}"
  />
</div>
<div class="meal-body">
  <h4>${mealData.Meal}</h4>
  <button class="fav-btn" onclick="">
    <i class="fas fa-heart"></i>
  </button>
</div>
`;

  //heart-btn click event
  const btn = meal.querySelector(".meal-body .fav-btn");
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
  });
  meals.appendChild(meal);
}
