// 1 - пользователь через prompt вводит страну в которую может сделать доставку
// 2 - пользователь может ввести страну не только буквами нижнего регистра
// 3 - написать скрипт который выводит сообщение о стоимости доставки в указанную страну в формате 'Доставка в [страна] будет стоить [цена] кредитов'
// 4 - если какой-то страны нет через alert получаем сообзение 'В вашей стране доставка не доступна'

"use strict";
let country = prompt("Введите страну");

if (country !== null) {
    country = country.toLowerCase();
}

let price;

switch (country) {
    case "китай":
        price = 100;
        break;
    
    case "чили":
        price = 250;
        break;
    
    case "австралия":
        price = 170;
        break;
    
    case "индия":
        price = 80;
        break;
    
    case "ямайка":
        price = 120;
        break;
    
    default:
        price = -1;
}

if (price !== -1) {
    country = country.charAt(0).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);

} else {
    alert("В вашей стране доставка не доступна");
    
}
    
