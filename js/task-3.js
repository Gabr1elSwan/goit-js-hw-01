// 1 - написать код имитирующий авторизацию
// 2 - в переменную message записано сообщение о результате. При загрузки страницу спрашивается пароль
// 3 - если нажали Cancel, то в message записуется 'Отменено пользователем!'
// 4 - если пароли совпадают выыодим 'Добро пожаловать!'
// 5 - если пароль не верный выводит 'Доступ запрещен, неверный пароль!'
// 6 - вывести message через alert

"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt('Введите пароль Админа');

if (input === null) {
    message = 'Отменено пользователем!';

} else if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    
} else {
    message = 'Доступ запрещен, неверный пароль!'
}

alert(message);
    



