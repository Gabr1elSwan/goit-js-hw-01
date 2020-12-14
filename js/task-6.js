// 1  - создать цикл который спрашивает пользователя ввести число
// 2 - если ввели null остановаить
// 3 - есшли ввели не null прербразовать в число и добавлять в total
// 4 - после цикла вывести общую сумму введеных числ
"use strict";
let total = 0

while(true){
    let input = prompt('Введите число');

    if (input === null){
        console.log('Отменено пользователем');
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber){
        console.log('Было введено не число, попробуйте еще раз');
        continue; 
    }
    
    total = total + input;

    }

    console.log(`Общая сумма чисел равна ${total}`);
