function estimateTransactionFee() {
  //prompt
  const input = prompt("Enter the amount you want to send:");
  const amounttosend = Number(input);
  //check if valid  number
  if (isNaN(amounttosend) || amounttosend <= 0) {
    console.log("Please enter a valid amount.");
    return;
  }
  const feePercent = amounttosend * 0.015;
  let feetransaction;
  if (feePercent < 10) {
    feetransaction = 10; //minimum fee
  } else if (feePercent > 70) {
    feetransaction = 70; //maximum fee
  } else {
    feetransaction = feePercent; //15% of the amount
  }

  const totalAmount = amounttosend + feetransaction;
  console.log(`Amount to send: KES ${amounttosend.toFixed(2)}`);
  console.log(`Transaction fee: KES ${feetransaction.toFixed(2)}`);
  console.log(`Total amount debited: KES ${totalAmount.toFixed(2)}`);
  //return total amount
  return totalAmount;
}
