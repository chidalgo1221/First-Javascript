var prices =[33,26,99,120,12,45];
var sum = 0;
var i;
for (i = 0; i < prices.length; i++) {
  sum = sum + prices[i]
}

console.log("The sum is:", sum);


let j = 99;
while (j > 1) {
    console.log(j + " " + "crows on the wall.");
    console.log("1 fell down and became a wight.");
    j = j - 1;
    if (j > 1) {
        console.log(j + " " + "crows on the wall.");
    } else {
        console.log("One crow. One single crow.")
        console.log("There's no one left to defend westeros now.");
    }
}
