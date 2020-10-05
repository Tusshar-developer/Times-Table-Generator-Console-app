// Times Table Generator


// Making the tables
function makingTables() {
  var tableNo = prompt("What number do you want the times table for?");

  while (isNaN(tableNo)) {
    tableNo = prompt(
      "That was not a number, please try again.\nWhat number do you want the times table for?"
    );
  }

  // the number of numbers that will be generated
  var numbers = 12;

  for (var i = 0; i <= numbers; i++) {
    console.log(`${tableNo} x ${i} = ${tableNo * i}`);
  }

  // This is there to seperate the times tables from getting to close to differentiate them
  console.log("--------------------------------------");
}


// Main Function
function tableGen() {
  var numbersOfTables = prompt("How many tables do you want to generate?");

  while (isNaN(numbersOfTables)) {
    numbersOfTables = prompt(
      "That is not a number, please try again.\nHow many tables do you want to generate?"
    );
  }

  while (numbersOfTables <= 0) {
    numbersOfTables = prompt(
      "That is not a positive number, please try again.\nHow many tables do you want to generate?"
    );
  }

  for (var i = 0; i < numbersOfTables; i++) {
    makingTables();
  }
};

// Generating all the tables
tableGen();

/* This will give an output of the following when "noOfTables" = 1:
(I am taking 10 as an example)

10 x 0 = 0
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
10 x 11 = 110
10 x 12 = 120

*/
