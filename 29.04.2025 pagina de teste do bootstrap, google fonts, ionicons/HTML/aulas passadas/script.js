
console.log('DIA 09/04/2025')

console.log("let's beat them \n or not \n maybe we should not do it btw");
console.log("nao sei oq \n vou fazer \n da minha vida AAAAAA");
console.log("Esta é \n outra \n frase");

console.log('esta frase aq "vai ter aspas" ');
console.log('eu nao disse "isso"!');
console.log('Life is "Wortheless"');

console.log(`A soma  de 2 + 2 é ${2+2}`);
console.log(`A soma de 5 * 78 é igual a ${5*78}`)
console.log(`Se vc somar 500 + 400 vai da ${500+400}`);

console.log("esta frase" + " completa" + " esta frase");
console.log("I don't wanna" + " talk" + " about it");
console.log("how " + "you broke " + "my heart");


console.log(20>10);
console.log(15<8);
console.log(30=="30");
console.log(5==="5");
console.log(100!=50);
console.log(7!=="7");
console.log(42<100);
console.log(7==7);
console.log(true==1);
console.log(false!=0);

console.log('operador "and " "&&" ' );
console.log(5>2 && 10>50);

console.log('Operador "or " "||"');
console.log(5<2 || 10<5);

console.log('Operador "not " "!" ');
console.log( 50>60 != 50>60 );

console.log(550+600/(80-220));

console.log("esta é uma frase");

console.log(`esta é uma frase "nova"`);

console.log("feel we about" + " to break up\n" + "i just wanna a kiss"+ " and make up" );

console.log("jairo"==="jairo" ? "sao iguais" : "nao sao iguais");

console.log(4 %2===0 ? "par" : "impar");

console.log(30>25?"Esta quente" : "Esta Frio");
console.log(15>25?"Esta quente" : "Esta Frio");

console.log(5>4?"5 é maior" : "4 é maior");
console.log(50<100?"50 é menor" : "100 é menor");



console.log("\n\n\n\nDIA 10/04/2025");

console.log("5" + '40' + `90`);

console.log(5, 5.2, 5+8 );

console.log(5>=8);
console.log(5<=10);
console.log(80!=50);

console.log(5>8 && 5==5 );
console.log(4>=5 || 10==10);
console.log((80==85));

console.log("dois" * "cinco");


let lua = 5, sol=10, terra=65

console.log("Este numero é igual a",lua+terra*sol);





console.log("\n\n\n\nAtividade");

let idade=18
console.log(idade>=18? "Pode dirigir" : "Não pode dirigir");


let media=10
console.log(media>=6 ? "Passou" : "Não passou");

let numero =5
console.log(numero %2==0 ? "É par" : "É ímpar");


let usuario="sim", usuario2="sim"
console.log(usuario =="sim" ? "É administrador" : "Não é administrador", usuario2 =="sim" ? "\nEstá Logado" : "\nEstá deslogado");

let admin="admin";
let logado =true;
console.log(admin ==="admin" && logado ? "Acesso permitido" : "Acesso negado");


let num=51
let max=50
let min=10
console.log(num <=max && num >=min ? "Esta no intervalo" : "Não esta no intervalo");

let valor =25
console.log(valor >=10 && valor <=50 ? "Esta no intervalo" : "não esta no intervalo");













//aula dia 15/04/2025

let num1 = prompt("digite um numero"); 
let num2 = prompt("digite outro numero");
console.log(num1,num2);

let maior = Math.max(num1,num2);
let menor = Math.min(num1,num2);

alert(`O Maior numero é ${maior}, e o menor numero é ${menor}`);



let nome=prompt("Qual seu nome?");
let idade=prompt("Qual a sua idade?");

console.log(`Olá ${nome}! então a sua idade é ${idade} anos? que legal!`, idade>=18 ? "Você pode tirar habilitação!" : "Você é ainda novo demais para tirar habilitação.");




//Primeira questão
let nota1=Number(prompt("Qual a primeira nota do aluno?"));
let nota2=Number(prompt("Qual a segunda nota do aluno?"));
console.log(nota1,nota2);

let media=((nota1+nota2)/2);
console.log(media)

if (media>=7){
    alert("Aprovado")
}
else {
    alert("Reprovado")
};

//Segunda questão

let num=Number(prompt("Digite um numero:"))
if (num %2==0){
    alert("É um numero par")
}
else{
    alert("É um numero impar")
};

//Terceira questão

let numero = Number(prompt("Digite um numero:"));
console.log(numero)


if (numero<0){
    alert("É um numero negativo")
}


else{
    alert("É um numero positivo")
}




//Primeira questão

let idade=Number(prompt("Digite a sua idade:"))
if (idade<=12){
    alert("Vc é criança!")
}
else if(idade<=17){
    alert("Vc é adolecente")
}
else if(idade==18 || idade<=59){
    alert("Vc é adulto")
}
else if(idade>=60){
    alert("Vc é idoso")
}

//Segunda questão

let temperatura=Number(prompt("Qual a temperatura do dia?"))

if (temperatura <=15){
    alert("Frio intenso")
}
else if(temperatura<=24){
    alert("Clima ameno")
}
else if(temperatura==25 || temperatura<=35){
    alert("Dia quente")
}

else if(temperatura>=35){
    alert("Calor extremo")
}




//22.04.2025

//Primeira questão
let turno = prompt("Digite qual turno vc estuda: m=matutino v=Vespertino n=Noturno:");
console.log(turno);

if(turno==="m" || turno==="M"){
    alert("Bom dia! vc estuda no turno matutino!");
}
else if(turno==="v" || turno==="V"){
    alert("Boa tarde! vc estuda no turno vespertino!");
}
else if(turno==="n" || turno==="N"){
    alert("Boa noite! vc estuda no turno noturno!");
}

else {
    alert("Turno invalido");
}


//Segunda questão 
let velocity =Number(prompt("Digite a velocidade:"));

if(velocity<=60){
    alert("Velocidade segura");
}
else if (velocity>=60 && velocity<=120){
    alert("Velocidade media")
}
else if(velocity>120)
{
    alert("Velocidade perigosa")
}



//23.04.2025


//Primeira questão

let nome =prompt("Digite seu nome:");
let idade =Number(prompt("Digite sua idade:"));
console.log(nome,idade);

if (idade<16){
    alert("Não pode votar");
}

else if (idade ==16 && idade <=17 || idade>65 ){
    alert("Voto facultativo");
}
else if (idade >=18 || idade <=65){
    alert("Voto obrigatorio");
}



//Segunda questão

let nome2 = prompt("Digite o nome do funcionario:");
let hr = Number(prompt("Digite a carga hoaria do funcionario:"));
let salario = Number(prompt("Digite o salario do funcionario:"));

let HrSemanais=hr*4;
let salarioMensal=salario/HrSemanais;

if (salarioMensal <=10){
    alert(`${salarioMensal} Salario baixo do ideal`);
}

else if(salarioMensal<=19.99){
    alert(`${salarioMensal} Salario razoavel`);
}

else if (salarioMensal>20){
    alert(`${salarioMensal} Bom salario`);
}

