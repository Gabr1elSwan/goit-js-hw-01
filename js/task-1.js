// 1 - обявить две переменные name и price
// 2 - название name - Генератор защитного поля, price - 1000
// 3 - вывести 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'
// 4 - присвоить price - 2000 и вывести в консоли 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

"use strict";
let name = "Генератор защитного поля";
let price = 1000;

console.log(`Выбран "${name}" цена за штуку ${price} кредитов.`);

price = 2000;

console.log(`Выбран "${name}" цена за штуку ${price} кредитов.`);