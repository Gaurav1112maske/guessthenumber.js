function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let number = (getRandomInt(100));
// Expected output: 0, 1 ,2 , 3,............to 100.

let chances = 1;
for (let i = 1; i <= chances; i++) {

  let value = prompt('ENTER THE NUMBER');
  let input = parseInt(value);
  if (input > number) {
    console.log("THE NUMBER IS SMALL");
  }
  else if (input < number) {
    console.log("THE NUMBER IS BIG")
  }
  else if (input == number) {
    console.log("THE NUMBER IS EXACT MATCH");
    output();
    continue;

  }
  chances++;
}

function output() {
  console.log("RANDOM NUMBER IS " + number);
  console.log("your score of guessing is " + (100 - chances) + " % ");
  console.log("THE NUMBER CHANCES YOU TAKE IS " + chances);

}

