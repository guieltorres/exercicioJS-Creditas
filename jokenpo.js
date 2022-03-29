function rpsGameWinner(game) {

    let player1choice = game[0][1].toUpperCase();
    let player2choice = game[1][1].toUpperCase();
    let gameStrategy = ["PA", "PE", "TE"];

    if (!gameStrategy.includes(player1choice) || !gameStrategy.includes(player2choice)) {
        throw 'NoSuchStrategyError';
    } else if (game.length != 2) {
        throw 'WrongNumberOfPlayers';
    }

    if (player1choice === player2choice) {
        return game[0];
    } else if (player1choice === "TE" && player2choice === "PA") {
        return game[0];
    } else if (player2choice === "TE" && player1choice === "PA") {
        return game[1];
    } else if (player1choice === "PA" && player2choice === "PE") {
        return game[0];
    } else if (player2choice === "PA" && player1choice === "PE") {
        return game[1];
    } else if (player1choice === "PE" && player2choice === "TE") {
        return game[0];
    } else if (player2choice === "PE" && player1choice === "TE") {
        return game[1];
    }
}

function tournamentGameWinner(tournament) {
    let filter = [];
    let winner = [];

    for (let i = 0; i < tournament.length; i++) {
        for (let j = 0; j < tournament[i].length; j++) {
            // console.log(tournament[i][j]);
            filter.push(rpsGameWinner(tournament[i][j]));
            console.log("filter " + filter);
            if (filter.length === 2) {
                winner.push(rpsGameWinner(filter));
                filter = [];
            }
        }
    }
    // console.log(winner);
    return rpsGameWinner(winner);
}

let player1 = ["Armando", "PE"];
let player2 = ["Dave", "TE"];
let player3 = ["Richard", "PA"];
let player4 = ["Michael", "TE"];
let player5 = ["Allen", "TE"];
let player6 = ["Arthur", "TE"];
let player7 = ["David", "PA"];
let player8 = ["Omer", "PE"];


let game1 = [player1, player2];
let game2 = [player3, player4];
let game3 = [player5, player6];
let game4 = [player7, player8];

let chave1 = [game1, game2];
let chave2 = [game3, game4];
let tournament = [chave1, chave2];

// console.log(rpsGameWinner(game1));

console.log(tournamentGameWinner(tournament))