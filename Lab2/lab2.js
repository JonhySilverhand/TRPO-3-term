/*1. Напишите функции, которые рассчитывают площадь, диаметр и длину окружности круга. Радиус круга вводит пользователь. Реализуйте функции как Function Declaration и Function Expression, функции-стрелки. */

function SquareDec(R)
{
    alert(`Площадь круга равна: ${(Math.PI * Math.pow(R, 2)).toFixed(2)}`);
};
let SquareEx = function(R){
    alert(`Площадь круга равна: ${(Math.PI * Math.pow(R, 2)).toFixed(2)}`);
};
let SquareArrow = (R) => {
    alert(`Площадь круга равна: ${(Math.PI * Math.pow(R, 2)).toFixed(2)}`);
};

function DiameterDec(R){
    alert(`Диаметр круга: ${2 * R}`);
};
let DiameterEx = function(R){
    alert(`Диаметр круга: ${2 * R}`);
}
let DiameterArrow = (R) => {
    alert(`Диаметр круга: ${2 * R}`);
};

function LenghtCircleDec(R)
{
    alert(`Длина окружности: ${(2 * Math.PI * R).toFixed(2)}`);
};
let LenghtCircleEx = function(R){
    alert(`Длина окружности: ${(2 * Math.PI * R).toFixed(2)}`);
};
let LenghtCircleArrow = (R) => {
    alert(`Длина окружности: ${(2 * Math.PI * R).toFixed(2)}`);
};
let R = Number(prompt("Введите радиус круга R", ''));
SquareDec(R);
SquareEx(R);
SquareArrow(R);
DiameterDec(R);
DiameterEx(R);
DiameterArrow(R);
LenghtCircleDec(R);
LenghtCircleEx(R);
LenghtCircleArrow(R);

/*2. Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. Третий параметр вводит пользователь. Функция возвращает строку из трех параметров. */

function threeParam(param3, param1 = '$', param2 = 30)
{
    return String(param3 + param2 + param1);
}
let param3 = prompt('Введите третий параметр: ', "");
alert("Строка с тремя параметрами: " + threeParam(param3));


/*3. Реализуйте функцию, которая рассчитывает количество присутствующих студентов. Имена присутствующих студентов пользователь вводит в модальное окно. */

function CountOfStudents()
{
    let count = 0;
    while(true)
    {
        let students = prompt("Введите имя студента (Для завершения ввода, введите 0):", '');
        if(students == 0)
        {
            return count;
        }
        if(students != "")
        count++;
    }
} 
alert(`Кол-во студентов: ${CountOfStudents()}`);

/*4. Вы забыли пароль от электронной почты. Вы помните, что он состоит из 8 символов нижнего регистра. Первые 5 – это буквы английского алфавита, последние 3 – цифры.  Один пароль вы успеваете ввести за 3 секунды. Сколько максимум времени вам понадобится, чтобы подобрать пароль? Выведите результат в виде строки «y лет m месяцев d дней h часов min минут s секунд». Для простоты решения можно принять, что в месяце 30 дней.*/

let CountOfTries = 26 * 26 * 26 * 26 * 26 * 10 * 10 * 10;
let years = 0;
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = CountOfTries * 3;

function PasswordGuessingTime()
{
    while(seconds >= 60)
    {
        if(seconds >= 60)
        {
            minutes++;
            seconds -= 60;
        }
        if(minutes >= 60)
        {
            hours++;
            minutes -= 60;
        }
        if(hours >= 24)
        {
            days++;
            hours -= 24;
        }
        if(days >= 30)
        {
            months++;
            days -= 30;
        }
        if(months >= 12)
        {
            years++;
            months -= 12;
        }
    }
    alert(`${years} лет ${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`);
}
PasswordGuessingTime();

/*5.Пользователь вводит данные. Если он ввел число, то преобразуйте его в 16-ричную систему счисления (вывод в верхнем регистре). Если число дробное – округлите его до наибольшего, наименьшего и ближайшего целого. Если пользователь ввел текст, то преобразуйте его к верхнему и нижнему регистру.*/

while(true)
{
    let data = prompt("Введите число(строку) Для прекращения ввода введите 'стоп' ", '');
    if(data.toLowerCase() == 'стоп')
    {
        break;
    }
    else if(Number(data))
    {
        if(Number.isInteger(Number(data)))
        {
            alert(Number(data).toString(16).toUpperCase());
        }
        else
        {
            alert(Math.ceil(Number(data)));
            alert(Math.floor(Number(data)));
            alert(Math.round(Number(data)));
        }
    }
    else
    {
        alert(data.toLowerCase());
        alert(data.toUpperCase());
    }
}

/*6. Выпускник сдает ЦТ по русскому языку. Ему дано словарное слово, необходимо ввести в текстовое поле правильный вариант ответа. Проверьте его ответ и сообщите в каком символе он допустил ошибку, если она есть. */

const dword = "Молоко";
let studentword = prompt("Введите словарное слово (М*л*ко)", '');
let wrongsymbol;
if(studentword.toLowerCase() != "молоко")
{
    for(i = 0; i < dword.length - 1; i++)
    {
        if(dword.toLowerCase()[i] != studentword.toLowerCase()[i])
        {
            wrongsymbol = i;
            break;
        }
    }
    alert(`В вашем слове ошибка, неверная буква: ${studentword[wrongsymbol]}, позиция: ${wrongsymbol + 1}`);
}
else
{
    alert("Ваше слово корректное");
}

/*7.	Разработайте геометрический калькулятор для расчета параметров треугольника: площадь, периметр, высота, cos, sin, tg, ctg. Пользователь указывает длину катетов. */

let cat1 = Number(prompt("Введите длину первого катета:", ''));
let cat2 = Number(prompt("Введите длину второго катета:", ''));
let hypotenuse = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2)).toFixed(2);
while(true)
{
    let n = Number(prompt("1 - Площадь, 2 - Периметр, 3 - Высота, 4 - sin, 5 - cos, 6 - tg, 7 - ctg, 8 - Exit", ''))
    if(n == 8)
    {
        break;
    }
    switch(n){
    case 1:
        let tsquare = 0.5 * cat1 * cat2;
        alert(`Площадь треугольника: ${tsquare}`);
        break;
    case 2:
        let tperimetr = cat1 + cat2 + hypotenuse;
        alert(`Периметр треугольника: ${tperimetr}`);
        break;
    case 3:
        let theight = cat1 * cat2 / hypotenuse;
        alert(`Высота треугольника: ${theight.toFixed(2)}`);
        break;
    case 4: 
        let sin1 = cat1 / hypotenuse;
        let sin2 = cat2 / hypotenuse;
        alert(`Синус первого угла треугольника: ${sin1}`);
        alert(`Синус второго угла треугольника: ${sin2}`);
        break;
    case 5:
        let cos1 = cat2 / hypotenuse;
        let cos2 = cat1 / hypotenuse;
        alert(`Косинус первого угла треугольника: ${cos1}`);
        alert(`Косинус второго угла треугольника: ${cos2}`);
        break;
    case 6:
        let tg1 = cat1 / cat2;
        let tg2 = cat2 / cat1;
        alert(`Тангенс первого угла треугольника: ${tg1}`);
        alert(`Тангенс второго угла треугольника: ${tg2}`);
        break;
    case 7:
        let ctg1 = cat2 / cat1;
        let ctg2 = cat1 / cat2;
        alert(`Котангенс первого угла треугольника: ${ctg1}`);
        alert(`Котангенс второго угла треугольника: ${ctg2}`);
        break;
    default:
        alert("Некорректный ввод...");
        break;
    }
}