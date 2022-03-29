# exercicioJS-Creditas


##Palíndromo
Escreva um método que determina se uma palavra ou frase é um palindromo, ou seja, a palavra pode ser lida de da esquerda para a direita ou ao contrário, ignorando pontuação, números e qualquer outro caracter que não seja uma letra. Considere também que não há diferenças entre letras maiúsculas e minúsculas. Resolva o problema usando apenas expressões regulares.

Dicas:
Use o site https://regexr.com/ para testar expressões regulares.
Alguns métodos que podem ser úteis são: String#replace, String#toLowerCase e String#split.
Exemplo de utilização:
console.log(palindrome('ana')); => true console.log(palindrome('maam')); => true console.log(palindrome('abracadabra')); => false console.log(palindrome("Madam, I'm Adam"));  => true

##Contar palavras
Dado uma String como entrada, retorne um Dicionário/Objeto no qual as chaves são as palavras da string e os valores são o número de vezes que cada palavra aparece. Não use loops do tipo 'for/while'. Novamente, apenas letras devem ser consideradas como palavras, sem diferença entre maiúsculas e minúsculas. Exemplo de utilização:

console.log(countWords('Doo bee doo bee doo')) => { doo: 3, bee: 2 }

##Anagramas
Um anagrama é uma palavra obtida por meio do rearranjo das letras de outras palavras. Por exemplo, "rats", "tars" e "star" são um grupo de anagramas pois são compostos pelas mesmas letras.
Dado um Array de Strings, escreva um método que agrupa as Strings em grupos de anagramas e retorna esses grupos. Letras maiúsculas e minúsculas podem ser tratadas como se fossem iguais, mas o retorno deve manter as letras maiúsculas e minúsculas. A ordem dos grupos ou das Strings não importa.
Exemplo de utilização:

console.log(combineAnagrams(words));=>[ [ 'CaRs', 'racs', 'scar' ],  [ 'foR' ],  [ 'poTatos' ],  [ 'four' ],  [ 'creams', 'scream' ] ]

##Torneio
No jogo Pedra-Papel-Tesoura (Jan-Ken-Po), cada jogador escolhe a estratégia que irá usar: Pedra(PE); Papel(PA) ou Tesoura(TE). As regras são que Pedra ganha de Tesoura, Tesoura ganha de Papel e Papel ganha de Pedra.

Jogo entre 2 pessoas
A entrada chamada JOGO é na forma de lista (Array), no qual cada elemento é outra lista (JOGADA) formada por 2 elementos: [<nome_do_jogador>, <estrategia_do_jogador>]
Escreva um método que aceita uma lista com duas JOGADAS e se comporta da seguinte maneira:
Se o número de jogadores não for igual a 2, lança o erro WrongNumberOfPlayersError
Se algum jogador escolher uma estratégia que não seja "PE", "PA" ou "TE", ignorando se as letras são maiúsculas ou minúsculas, lança o erro NoSuchStrategyError
Caso contrário, retorna a lista formada pelo jogador e sua estratégia. Se os dois jogadores usarem a mesma estratégia, o primeiro jogador vence
Siga o modelo:
function rpsGameWinner(game) {  if (game.length != 2) {    throw 'WrongNumberOfPlayers';  }  // your code here...}console.log(rpsGameWinner(game)) => [ 'Dave', 'TE' ]

##Torneio (Chaves)
Um torneio de Pedra-Papel-Tesoura é representado por chaves. Cada chave pode ser composta por duas outras chaves ou um jogo. Exemplo:

Nesse torneio exemplo, na primeira chave mais externa, Armando ganha de Dave, Michael ganha de Richard, sendo assim, Armando joga contra Michael e, por fim, Armando é o vencedor.
Da mesma forma, Allen ganha de Arthur, David ganha de Omer. Depois Allen ganha de David.
Finalmente, Armando ganha de Allen.
Escreva um método que aceita um torneio encodado como no exemplo acima e retorna o vencedor (No caso do exemplo, o retorno seria ["Armando", "PE"]). Você pode assumir que a entrada do método será bem formatada, ou seja, teremos sempre 2^n players.
Exemplo:
function tournamentGameWinner(tournament) {  // your code goes here...}let tournament = [  [    [      ['Armando', 'PE'], ['Dave', 'TE']    ],    [      ['Richard', 'PA'], ['Michael', 'TE']    ],  ],  [    [      ['Allen', 'TE'], ['Arthur', 'TE']    ],    [      ['David', 'PA'], ['Omer', 'PE']    ],  ],];console.log(tournamentGameWinner(tournament))
Dicas:
É possível trabalhar com recursão?
Em Javascript é possível verificar se um valor é uma string da seguinte maneira:
let game = [['Armando', 'PA'], ['Dave', 'TE']];console.log(typeof game[0][0] == 'string')
