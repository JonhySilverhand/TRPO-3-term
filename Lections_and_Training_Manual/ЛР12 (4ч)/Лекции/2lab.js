//1
let radius = prompt("Введите радиус круга");
let diameter = radius * 2;
let length = 2 * Math.PI * radius;
let square = Math.PI * radius ** 2;
alert(`Диаметр ${diameter} \nДлина ${length} \nПлощадь ${square}`)

//2
let balance = 100;

let basket = 0;

let answer;

while (answer != '0') {
    answer = prompt(`Введите стоимость товара \nСумма на счету: ${balance} \nСтоимость корзины: ${basket}`);
    
    if ((+basket + +answer) <= balance) {
        basket += +answer;
    } 
    else if (answer != '0') {
        alert (`Ошибка! Выберите товар с меньшей стоимостью или завершите покупку \nЧтобы завершить покупку введите 0`);
    }
} 

//3
function idk (first = "параметр по умолчанию", second, third) {
    alert (`${first}... сумма второго и третьего параметров: ${+second + +third}`)
}

third = prompt ("Введите третий параметр");

idk('', 12, third);