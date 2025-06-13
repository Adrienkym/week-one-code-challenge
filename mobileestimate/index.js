function estimateTransactionFee() {
  // Prompt the user to enter amount
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi sahihi.");
    return;
  }

  // Calculate 1.5% fee
  let fee = amountToSend * 0.015;

  // Apply min and max fee limits
  fee = Math.max(10, Math.min(fee, 70)); // ensures fee is between 10 and 70

  // Calculate total amount to be debited
  const total = amountToSend + fee;

  // Display output
  console.log(`Sending KES ${amountToSend.toFixed(2)}:`);
  console.log(`Calculated Transaction Fee: KES ${fee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${total.toFixed(2)}`);
  console.log("Send Money Securely!");
}
