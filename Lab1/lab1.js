function pow(x,n)
{
    let result = 1;
    for (var i = 0; i < n; i++) {result*=x;}
    return result;
}

x=prompt("x?",'')
n=prompt("n?",'')
if(n<0)
{
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
    alert(pow(x,n))
}
let uname = "Vlad"
let city = "Minsk"
let myBirthday = "23.12.2003"
let color = '#ff000'
let userAnswer = prompt("Да или нет?", '')
alert(userAnswer)
let inf = Infinity
let num = 532
let Per = "120mm"
let message = alert("Введенные данные неверны")

let a = 5 
let name = "Name"
let i = 0
let double = 0.23
let result = 1/0
let answer = true
let no = null

alert("The type of a is: " + typeof a)//number
alert("The type of name is: " + typeof name)//string
alert("The type of i is: " + typeof i)//number
alert("The type of double is: " + typeof double)//number
alert("The type of result is: " + typeof result)//number
alert("The type of answer is: " + typeof answer)//boolean
alert("The type of no is: " + typeof no)//object

let firstsSide = 45
let secondSide = 21
let areaofRect = firstsSide * secondSide
alert('Площадь прямоугольника равна: ' + areaofRect)

let sB = 25
alert('В четырехугольник A поместится ' + Math.round(areaofRect / sB) + ' квадратов со стороной 5мм')

//let i = 2 
//let a = ++i//3
//let b = i++//2
//a > b

//alert("Привет" < "привет") //true
//alert("Привет" < "Пока")//false
//alert(45 < "53")//true
//alert(false > 3)//false
//alert(true < 1)//false
//alert(3 > "5мм")//false
//alert(null > undefined)//false
alert('Вы ввели неверные данные')
let answer1 = prompt("Сегодня нужно идти в универ?", '')
if(answer1 == 'Да' || answer1 == 'да')
{
    alert('Удачного дня!')
}
else if(answer1 == 'Нет' || answer1 == 'нет')
{
    alert('Значит сегодня отдых')
}
else{
    alert('Введены некорректные данные')
}

let login = "smirnov11"
let password = "qwerty444"
let userlogin = prompt("Введите логин", '')
let userpassword = prompt("Введите пароль", '')
if(userlogin == login && userpassword == password)
{
    alert("Вход выполнен успешно!")
}
else if(userlogin != login) {alert("Вход не выполнен. Неверный логин")}
else if(userpassword != password) {alert("Вход не выполнен. Неверный пароль")}

let examrus = false
let exammath = true
let exameng = false
if(exameng && exammath && examrus)
{
    alert("Вы сдали успешно все экзамены. Вас переводят на следующий курс")
}
else if(!exameng && !exammath && !examrus)
{
    alert("Вы не сдали экзамены. Вас отчисляют")
}
else if(!exameng && exammath && !examrus)
{
    alert("У вас не сдан один предмет. Вас ожидает пересдача")
}

let a1 = Number(prompt("Введите число a:", ''))
let b1 = Number(prompt("Введите число b:", ''))
let sum = Number(a1 + b1)
alert("Сумма чисел a и b равна: " + sum)

alert(true + true)//2
alert(0 + "5")//05
alert(5 + "мм")//5мм
alert(8/Infinity)//0
alert(9* "\n9")//81
alert(null - 1)//-1
alert("5" - 2)//3
alert("5px" - 3)//NaN
alert(true - 3)//-2
alert(7 || 0)//7

for(let i = 1; i <= 10; i++)
{
    if(i % 2 == 0)
    {
        alert(i + 2)
    }
    else
    {
        alert(i + "мм")
    }
}
 
while(true)
{
    yourNum = Number(prompt("Введите любое число: ", ''))
    if(yourNum > 100)
        break;
}

let numday = 1;
numday = Number(prompt("Введите число от 1 до 7: ", ''))
switch (numday)
{
    case 1:
        alert("Понедельник")
        break;
    case 2:
        alert("Вторник")
        break;
    case 3:
        alert("Среда")
        break;
    case 4:
        alert("Четверг")
        break;
    case 5:
        alert("Пятница")
        break;
    case 6:
        alert("Суббота")
        break;    
    case 7:
        alert("Воскресенье")
        break;
    default:
        alert("Такого дня не существует")
        break;
}

