function calculateBodaFare(distanceInKm) {
  const baseFare = 50; //kes
  const changeperkm = 15; //kes

  //total fare
  const totalFare = baseFare + changeperkm * distanceInKm;
  return totalFare;
}
//prompt user
const inputUser = prompt("Enter the distance in kilometers");
const distanceInKm = Number(inputUser);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
  const fare = calculateBodaFare(distanceInKm);
  console.log(`The total fare for ${distanceInKm} km is KES ${fare}`);
} else {
  console.log("Please enter a valid distance.");
}
