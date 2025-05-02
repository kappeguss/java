"use strict"

// Metodo base per l'utilizzo di funzioni 

function defaultValue(string){
    string = string || "World"; // da ricordare 
    return string;
}

function Username(){
    const name = prompt("il tuo nome? ");
    return Maiuscolo(defaultValue(name));
}

function Maiuscolo(string) 
{
    return string[0].toUpperCase() + string.slice(1); // Changed here
}

const name = Username();
document.body.innerHTML = "Hello, " + name + "!";

const Nuovobj = {
    // METODO
    hello: function() 
    {
        console.log("Hello");
    }
};
Nuovobj.hello(); // invocazione del metodo





/*console.log("Hello, World!");
alert("Hello, World!");*/

/*const x = 3; 
let y=4;
{
    let x=7;
    y=8;
    console.log(x,y);
}
console.log(x,y);*/