var humanScore = 0;
var computerScore = 0;

function compareStrings (string1, string2) {
    return string1.toUpperCase() === string2.toUpperCase();
}

const getComputerChoice = () => {
    const random = Math.random();
    if (random <= 0.33) {
        return 'Rock';
    }
    else if (random > 0.33 && random <= 0.66) {
        return 'Paper';
    }
    return 'Scissors'
}

const getHumanChoice = () => {
    const choice = prompt('What are your choice ?');
    return choice;
}

const playRound = (machine, human) => {
    
    if(compareStrings(human, 'Rock') === true && compareStrings(machine, 'Scissors') === true) {
        console.log('1 ' + human, machine);
        return humanScore++;
    }
    else if (compareStrings(human, 'Scissors') === true && compareStrings(machine, 'Paper') === true) {
        console.log('2 ' + human, machine);
        return humanScore++;
    }
    else if (compareStrings(human, 'Paper') === true && compareStrings(machine, 'Rock') === true) {
        console.log('3 ' + human, machine);
        return humanScore++;
    }
    else if (compareStrings(human, machine)) {
        console.log('4 ' + human, machine);
        return 'Draw';
    }
    else {
        console.log('5 ' + human, machine);
        return computerScore++;
    }
}


while(humanScore + computerScore < 5) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log('Human : ' + humanScore, ' Computer: ' + computerScore);

}