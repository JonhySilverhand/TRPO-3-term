let comment = prompt("Введите комментарий", '');
const countlet = 100;
let result;

if(comment.length > countlet)
{
    alert("Длина комментария превышает длину в 100 символов...");
}
else
{
    result = comment.replace(/кот/gi, '*');
    result = result.replace(/собак/gi, 'Собак');
    result = result.replace(/пес/gi, 'многоуважаемый пес');
}
alert(result);

/*2.	По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
Используйте объект. Выведите все нечетные дни (номер и название) и их количество.*/
let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
}

let numb = Number(prompt("Введите номер дня недели", ''));
if(numb < 1 || numb > 7)
{
    alert("Некорректный ввод");
}
else
{
    alert(week[numb]);
}

let count = 0;
for(let d in week)
{
    if(d % 2 != 0)
    {
        alert(`Номер: ${d}, Название дня: ${week[d]}`);
        count++;
    }
}
alert(`Кол-во нечетных дней: ${count}`);

/*3.	На сайте все элементы оформлены одинаково. У всех кнопок одинаковые ширина, высота, цвет фона и текста. Все ссылки имеют одинаковые размер шрифта, гарнитуру и цвет текста. Для привлечения внимания элементы выделяют желтым цветом (цвет фона). Создайте объекты для кнопок, для ссылок и акцентных элементов (3 объекта!!). Используя эти объекты, создайте акцентные кнопки и ссылки. */

let link = document.createElement("a");
let button1 = document.createElement("button");
let link2 = document.createElement("a");
let accent = document.createElement("em");
let container = document.querySelector("header");

let Button = {
    color: "#5b85c7",
    background: "gray",
    'font-size': "20px",
    'margin-right': "34px",
}

let Link = {
    background: "#de4ce6",
    color: "white",
    'font-size': "15px",
    'margin-right': "34px",
}

let Elements = {
    color: "#9ae86d",
    'margin-right': "34px",
    'padding-left': "25px",
}

Object.assign(link.style, Link);
Object.assign(button1.style, Button);
Object.assign(link2.style, Link);
Object.assign(accent.style, Elements);

link.innerHTML = "Cсылка";
link2.innerHTML = "Ссылочка";
accent.innerHTML = "Кнопка с акцентом";

container.append(button1);
button1.append(accent);
container.append(link);
container.append(link2);

/*4.	Имеется список товаров. Пользователь может добавить/удалить товар из списка, проверить наличие товара. Определите количество имеющего товара. Используйте коллекцию Set.   */

let set = new Set(["Макароны", "Сливки", "Батон", "Сыр"]);

set.forEach( (value, valueAgain, set) => alert(value));

let exit = 1;
while (exit) {
   let choice = prompt("Выберите что вы хотите сделать:\n1 - Добавить товар\n2 - Удалить товар\n3 - Проверить наличие товара\n4 - Выйти")
    let elem;
    switch (choice) {
        case "1": {
            elem = prompt("Введите название товара");
            set.add(elem);
            set.forEach((value, valueAgain, set) => alert(value));
            break;
        };
        case "2": {
            elem = prompt("Введите название товара");
            set.delete(elem);
            set.forEach((value, valueAgain, set) => alert(value));
            break;
        };
        case "3": {
            elem = prompt("Введите название товара");
            if (set.has(elem)) {
                alert(`Товар ${elem} уже добавлен в корзину`);
            }
            else {
                alert(`Товар ${elem} ещё не добавлен в корзину`);

            }
            break;
        };
        case "4": {
            exit = 0;
            break;
        };
        default:
            exit = 0;
            break;
    }
}
alert(`Количество позиций в нашей корзине: ${set.size}`);

/*5.	Используя коллекцию Map и ее методы, реализуйте корзину товаров. В корзине хранится информация о товаре: id, количество товара, цена. Пользователь может добавить/удалить товар из корзины, изменить количество каждого товара. Рассчитайте количество позиций в корзине и сумму заказа. */

let basket = new Map();
ex = true;
let Sum = 0;

while(ex)
{
    let choice = +prompt("1 - Добавить товар в корзину\n2 - Удалить товар из корзины\n3 - Изменить кол-во каждого товара\n4 - Информация о товарах в корзине\n5 - Выход из корзины");
    let info = {
        id: id = 0,
        Count: c = 0,
        Price: p = 0
    }
    switch(choice)
    {
        case 1: {
            info.id = +prompt("id");
            info.Count = +prompt("Кол-во");
            info.Price = +prompt("Цена");
            basket.set(info.id, info);
            break;
        }
        case 2: {
            basket.delete(+prompt("Введите нужный номер товара в корзине, для удаления"));
            break;
        }
        case 3: {
            let buff = {
                id: info.id,
                Count: +prompt("Введите новое кол-во товара"),
                Price: info.Price
            }
            basket.set(+prompt("Введите номер товара"), buff);
            break;
        }
        case 4: {
            for(let item of basket.values())
            {
                Sum += item.Price;
            }
            alert(Sum + " - сумма " + basket.size + " - кол-во позиций товаров");
            break;
        }
        case 5: {
            ex = false;
            break;
        }
        default: {
            ex = false;
            break;
        }
    }
}