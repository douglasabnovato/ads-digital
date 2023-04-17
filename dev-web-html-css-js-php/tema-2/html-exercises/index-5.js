//5 ) Inverter String 
 
console.log("executando Inverter...");

let stringOriginal = prompt("Uma frase?"); 
let stringNew = [""]
let i = (stringOriginal.length - 1); 
let j = 0; 

while (i >= 0){   
  stringNew[j] = stringOriginal[i];
  i--;
  j++;
}

console.log("string Original", stringOriginal); 
console.log("string New", stringNew); 