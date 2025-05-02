"use strict"

//  oggetti 
const obj = {
    nome: "YunHao",  // property 
    cognome: "Hu",
};

//console.log(obj);
console.log(obj.nome);
console.log(obj.cognome);

obj.nome = "YunJie";
obj.eta = 45 + " anni";

console.log(obj.nome, obj.cognome, obj.eta); // accesso statico


/*if (!("miao" in obj))
{
    console.log(obj.miao) // di default darà undefined
}*/

/*const prop = prompt("Nome della Property?");
const Value = prompt("Value?");
obj[prop] = Value; // obj.??? = accesso dinamico
console.log(prop, ":", obj[prop]); //obj.??? = accesso dinamico */

for (let p in obj)
{
    console.log(p, ":", obj[p]);
}

// Array
const array = [];
console.log(array);

const stuff = [
    "matita",
    "occhiali",
    {
        nome: "astuccio", 
        contenuto: [ "biro", "sbianchetto" ]
    }
];

stuff.lenght = 0; // per cancellare il contenuto dell'array 
console.log(stuff.length);
console.log(stuff[0]);
console.log(stuff[1]);
console.log(stuff[2].nome, stuff[2].contenuto[0], stuff[2].contenuto[1]);

//Metodi per Array 
array.push("Fabri");
array.push("Cristina","Leo", "Gianni");

array.unshift("Cicci");
console.log(array);

const skibidi = array.pop(); 
const toilet = array.shift();
console.log(skibidi, toilet, array);

const zhh= array.slice(1,2)
console.log(zhh, array);

const kyy= array.splice(1,1, "lorenz", "kappuz" , "piangina")
console.log(kyy, array)