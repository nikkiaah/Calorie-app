// Variables
let age = 15;
let gender = "female";
let weight = 125;
let height = 62;

// Amount of exercise affects the number of calories
let FreqExercise = 1;
let KiloCalories;

if (FreqExercise === 1) {
  KiloCalories = 1600; // 1600-1700
} else if (FreqExercise === 2) {
  KiloCalories = 1800; // 1800-1900
} else {
  KiloCalories = 2000; // 2000-2100
}

// FoodToday object to store food data
let FoodToday = {
  Name: [],
  Category: [],
  Calories: []
};

// Food class
class Food {
  constructor(name, category, calories) {
    this.name = name;
    this.category = category;
    this.calories = calories;

    // Adding to the FoodToday object
    FoodToday.Name.push(this.name);
    FoodToday.Category.push(this.category);
    FoodToday.Calories.push(this.calories);
  }
}

// Creating a new food object
let potato = new Food("Potato", "Carbs", 600);

// Summing up the calories
const sumCalories = FoodToday.Calories.reduce((acc, curr) => acc + curr, 0);
console.log("Total Calories: " + sumCalories);

// Displaying the data as a table
console.table(FoodToday);
