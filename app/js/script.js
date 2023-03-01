console.log('Hello!'); //строки берем в кавычки
console.log("world");
console.log('3333');
console.log(334);
console.log('Hello' + 'world');//конкатенация
console.log('Hello' + ' world');//конкатенация
console.log('Hello ' + 'world');//конкатенация
console.log('Hello' + ' ' + 'world');//конкатенация
console.info('Hello');
//alert('Hello');
//alert('Hello'); //ctrl+l
//alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '2023';
document.getElementById('out').innerHTML = '<b>2024</b>';

document.querySelector('h2.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777; // есть #
document.getElementById('one').innerHTML = 888; // нет #

let b; // var a - устарело
let a = document.querySelector('#one'); // внутрь а получил параграф
let c; // операция объявления
c = document.querySelector('h2.header'); // операция присвоения

a.innerHTML = 9999; // new! - ошибка
c.innerHTML = 6666;