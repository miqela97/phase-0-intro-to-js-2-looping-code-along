// writecards function
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages; 
  }
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouCards = writeCards(names, eventName);
  console.log(thankYouCards);
  
// countdown function
function countDown(startingNumber) {
    let currentNumber = startingNumber;
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  countDown(10);