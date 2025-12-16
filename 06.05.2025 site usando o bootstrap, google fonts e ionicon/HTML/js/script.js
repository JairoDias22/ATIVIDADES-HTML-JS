//Primeira questão
/*
let string1= "A";
let numero= Number(5);
let vdd=Boolean(true);

console.log(typeof(string1));
console.log(typeof(numero));
console.log(typeof(vdd));

//Segunda questão
let age = Number(prompt("Qual a sua idade?"));

if (age>=18){
    console.log(`Vc tem ${age} anos! Pode entrar!`)
}
else (
    console.log("Vc é de menor! Não pode entrar!")
);

//Terceira questão
const nome = prompt("Qual o seu nome?");

if (nome==="Jairo" || nome==="jairo"){
    console.log(`Olá ${nome}! como vc está?`)
}
else(
    console.log("Desculpe, vc não é o jairo")
);

//Quarta questão
console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

//Quinta questão
let maior=Number(prompt("Digite sua idade:"));
let cnh=prompt("Vc possui CNH?");

if (maior>=18 && cnh==="sim" || cnh==="Sim"){
    console.log("Vc é de maior e tem CNH! Então vc pode dirigir!")
}
else if (maior>=18 && cnh ==="nao" || cnh==="Nao"){
    console.log("Vc é de maior porém não possui CNH, vc não pode dirigir!")
}

else if(maior<=18 && cnh==="sim" || cnh==="Sim"){
    console.log("Pare de mentir, vc nao pode ter CNH sendo de menor!")
}

else(
    console.log("Vc não tem idade pra dirigir e nem carteira, vc definitivamente nao pode dirigir")
)

//Sexta questão
let num=0;

while (num<=10){
    console.log(`Numero ${num}`);
    num++
};

*/
//Setima questão
let poke=Number(100);

for (let poke=100;poke>=50;poke--){
    console.log(`Numero ${poke}`);
};

//Oitava questão
let pikachu=Number(0);

for (let pikachu=0;pikachu<=50;pikachu++){
    if (pikachu %2===0) {
        console.log(`${pikachu} é par`);
    }
    else {
        console.log(`${pikachu} é impar`);
    }
    
};
