const input = "Cool Story, you're great";

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++){
  for (let x = 0; x < vowels.length; x++){
    if (input[i] === vowels[x]){
      resultArray.push(input[i]);
    if (input[i] === 'e'){
      resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
      resultArray.push(input[i]);
    }
    }
  }
}

console.log(resultArray);
resultString = resultArray.join('');
console.log(resultString);
resultString = resultString.toUpperCase();
console.log(resultString);