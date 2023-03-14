console.log("Hello World!");

let nombres = [1, 13, 25, 3, 15, 11, 50, 23];

function sum(liste){
  return liste.reduce((acc, value) => acc + value, 0);
}

console.log(sum(nombres));