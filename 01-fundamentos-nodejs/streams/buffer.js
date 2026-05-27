// Entendendo Buffer
// Representação de um espaço na memória do computador
// Maneira mais eficiente de tratar/ler/escrever dados binarios na memória do computador. Forma baixo nível eficiente

const buf = Buffer.from("ok");
// saída - hexademcimal
// <Buffer 6f 6b>
console.log(buf);
// O node consegue trabalhar de forma mais performatica graças a isso
// Populamos o buffer com strings e utilizamos da maneira que preferirmos
