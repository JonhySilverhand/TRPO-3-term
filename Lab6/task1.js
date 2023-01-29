//1. Представьте фигуры на картинке в виде объектов. Обратите внимание, фигуры имеют одинаковые параметры.
const square = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    background: 'yellow'
}

const circle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'white'
}

const triangle = {
    width: '100px',
    height: '100px',
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    middleLine: true, 
}

const secondsquare = {
    width: '100px',
    height: '100px',
    border: '10px solid black',
    background: 'yellow'
}

const secondCircle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'green'
}

const secondTriangle = {
    width: '100px',
    height: '100px',
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    threeMiddleLines: true, 
}

//Выведите: свойства, которые отличают фигуру «зеленый круг»; 
   const propOne = Object.getOwnPropertyNames(circle);
   const propTwo = Object.getOwnPropertyNames(secondCircle);

   for(let counter = 0; counter < propOne.length; counter++){
        if(circle[propOne[counter]] != secondCircle[propTwo[counter]]){
            alert("Отличия : " + circle[propOne[counter]] + " - " + secondCircle[propTwo[counter]]);
        }
    }

//Свойства, которые описывают фигуру «треугольник с тремя линиями»;
    const propOne1 = Object.getOwnPropertyNames(triangle);
    let res = 'Треугольник:\n';
    for(let counter = 0; counter < propOne1.length; counter++){
        res += propOne1[counter] + " - " + triangle[propOne1[counter]]+"\n";
    }
    alert(res);

//Есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры.

const propOne2 = Object.getOwnPropertyNames(secondsquare);
const propTwo2 = Object.getOwnPropertyNames(square);
let state = 0;
for (let counter = 0; counter < propOne2.length; counter++) {
    if (secondsquare[propOne2[counter]] == 'yellow') {
        for (let x = 0; x < propOne.length; x++) {
            if (propOne2[counter] == propTwo2[x]) {
                alert('Цвет маленького квадрата не является уникальным');
                state++;
                break;
            }
        }
    }
}
    
if (state == 0) {
       alert('Цвет маленького квадрата не является уникальным');
}
