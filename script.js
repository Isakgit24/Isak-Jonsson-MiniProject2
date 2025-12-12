const nameForm = document.querySelector('Form')
const throwDie = document.querySelector('#throwDie')

const getRandomNumber = (max = 6) => {
	return Math.floor( Math.random() * max ) + 1;
}



nameForm.addEventListener('submit', e => {
e.preventDefault();
const p = document.createElement('p')
document.body.appendChild(p)
    const input = nameForm.username.value
    p.innerText = input
     p.style.color = 'green'
    p.style.textAlign = 'center'
   
})

throwDie.addEventListener('click', e => {

 const num =  getRandomNumber()
console.log(num)
 switch (2) {

    case 1:
const div = document.createElement('div');
const one = document.createElement('div');

one.appendChild(div);
document.body.appendChild(one);
one.classList.add('die', 'one');
break;

case 2:
const div2 = document.createElement('div');
const two = document.createElement('div');

two.appendChild(div2);
document.body.appendChild(two);
two.classList.add('die', 'one', 'two');
break;

case 3:
const div3 = document.createElement('div');
const three = document.createElement('div');

three.appendChild(div3);
document.body.appendChild(three);
three.classList.add('die', 'three');
break;

case 4:
const div4 = document.createElement('div');
const four = document.createElement('div');

four.appendChild(div4);
document.body.appendChild(four);
four.classList.add('die', 'four');
break;

case 5:
const div5 = document.createElement('div');
const five = document.createElement('div');

five.appendChild(div5);
document.body.appendChild(five);
five.classList.add('die', 'five');
break;

case 6:
const div6 = document.createElement('div');
const six = document.createElement('div');

six.appendChild(div6);
document.body.appendChild(six);
six.classList.add('die', 'six');
break;

 }

})
/*


const bgColor =''

switch (bgColor) {
    case 'blue':
     const blue = document.createElement('h1')
        document.body.append(blue)
        blue.innerText = 'blue'
        blue.style.backgroundColor = 'blue'
        break;
    case 'green':
     const green = document.createElement('h1')
        document.body.append(green)
        green.innerText = 'green'
        green.style.backgroundColor = 'green'
        break;
            case 'red':
     const red = document.createElement('h1')
        document.body.append(red)
        red.innerText = 'red'
        red.style.backgroundColor = 'red'
        break;
        default:
            const grey = document.createElement('h1')
        document.body.append(grey)
        grey.innerText = 'grey'
        grey.style.backgroundColor = 'grey'
}


 const div = document.createElement('div');
  const one = document.createElement('div');

one.appendChild(div);
document.body.appendChild(one);
one.classList.add('die', 'one');
*/

