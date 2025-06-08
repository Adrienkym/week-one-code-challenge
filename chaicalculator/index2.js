function calculateChaiIngredients(noofcups) {
  //ingridients per cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50; // in ml
  const teaPerCup = 1; // in teaspoons
  const sugarPerCup = 2; // in teaspoons

  //total
  const totalWater = waterPerCup * noofcups;
  const totalMilk = milkPerCup * noofcups;
  const totalTea = teaPerCup * noofcups;
  const totalSugar = sugarPerCup * noofcups;

  console.log(`To make ${noofcups} cups of chai, you will need:`);
  console.log(`${totalWater} ml of water`);
  console.log(`${totalMilk} ml of milk`);
  console.log(`${totalTea} teaspoons of tea`);
  console.log(`${totalSugar} teaspoons of sugar`);
}
//prompt user
const inputuser = prompt("Enter the number of cups of chai you want to make:");
const noofcups = Number(inputuser);
//check if valid number
if (!isNaN(noofcups) && noofcups > 0) {
  calculateChaiIngredients(noofcups);
} else {
  alert("Please enter a valid number of cups.");
}
