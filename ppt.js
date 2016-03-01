//Jogo: Pedra, papel e tesoura

var userChoice = prompt("Voce escolhe pedra, papel ou tesoura?");
console.log("Usuário: " + userChoice);

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "pedra";
} else if(computerChoice <= 0.67) {
	computerChoice = "papel";
} else {
	computerChoice = "tesoura";
} 
console.log("Computer: " + computerChoice);

var compare=function(choice1,choice2){
    if(choice1 == choice2)
    {
        return ("O resultado é um empate!");
    }
    else if(choice1 =="pedra")
    {
        if(choice2 =="tesoura")
        {
            console.log("pedra vence");
        }
        else
        {
            console.log("papel vence");
        }
    }
    else if(choice1 == "papel")
    {
        if(choice2 == 'pedra')
        {
            console.log("papel vence");
        }
        else
        {
            console.log("tesoura vence");
        }
    }
    else if(choice1 == "tesoura")
    {
        if(choice2 == "papel")
        {
            console.log("tesoura vence");
        }
        else 
        {
            console.log("pedra vence");
        }
    }
};
compare(userChoice,computerChoice);
