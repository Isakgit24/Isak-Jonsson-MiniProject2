const nameForm = document.querySelector('Form')
const rollBtn = document.querySelector('#rollBtn')
const holdBtn = document.querySelector('#holdBtn')
const playerName = document.querySelector('#playerName')
const totalPoints = document.querySelector('#totalPoints')
const roundPoints = document.querySelector('#roundPoints')
const totalRounds = document.querySelector('#rounds')
const win = document.querySelector('#win')

const getRandomNumber = (max = 6) => {
    return Math.floor(Math.random() * max) + 1;
}

let totalscore = 0;
let round = 0;
let points = getRandomNumber()
let roundScore = 0;


// round ska plussas på medett vid två olika tillfällen
// när användaren slår en etta
// När användaren klickar på "frys"



 nameForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = nameForm.username.value
    playerName.innerText = input
    playerName.style.color = 'green'
    playerName.style.textAlign = 'center'
   

})

    holdBtn.addEventListener('click', e => {
        totalscore += roundScore;
        roundScore = 0;
        round++;

         totalPoints.innerText = totalscore;
            roundPoints.innerText = 0;
        totalRounds.innerText = `${round}`
            if(totalscore >= 100) {
        win.style.color = 'green'
        win.innerText = `${input}you got to 100 points in ${round} rounds`
    }
        
            console.log(`Round ${round} ${totalscore}`)
    })


rollBtn.addEventListener('click', e => {
    points = getRandomNumber()
//console.log(round)

    switch (points) {

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
            const dot = document.createElement('div');

            two.appendChild(div2);
            two.appendChild(dot);
            document.body.appendChild(two);
            two.classList.add('die', 'two');
            break;

        case 3:
            const div3 = document.createElement('div');
            const three = document.createElement('div');
            const dot2 = document.createElement('div');
            const dot3 = document.createElement('div');

            three.appendChild(div3);
            three.appendChild(dot2);
            three.appendChild(dot3);
            document.body.appendChild(three);
            three.classList.add('die', 'three');
            break;

        case 4:
            const div4 = document.createElement('div');
            const four = document.createElement('div');
            const dot4 = document.createElement('div');
            const dot5 = document.createElement('div');
            const dot6 = document.createElement('div');

            four.appendChild(div4);
            four.appendChild(dot4);
            four.appendChild(dot5);
            four.appendChild(dot6);
            document.body.appendChild(four);
            four.classList.add('die', 'four');
            break;

        case 5:
            const div5 = document.createElement('div');
            const five = document.createElement('div');
            const dot7 = document.createElement('div');
            const dot8 = document.createElement('div');
            const dot9 = document.createElement('div');
            const dot10 = document.createElement('div');

            five.appendChild(div5);
            five.appendChild(dot7);
            five.appendChild(dot8);
            five.appendChild(dot9);
            five.appendChild(dot10);
            document.body.appendChild(five);
            five.classList.add('die', 'five');
            break;

        case 6:
            const div6 = document.createElement('div');
            const six = document.createElement('div');
            const dot11 = document.createElement('div');
            const dot12 = document.createElement('div');
            const dot13 = document.createElement('div');
            const dot14 = document.createElement('div');
            const dot15 = document.createElement('div');

            six.appendChild(div6);
            six.appendChild(dot11);
            six.appendChild(dot12);
            six.appendChild(dot13);
            six.appendChild(dot14);
            six.appendChild(dot15);
            document.body.appendChild(six);
            six.classList.add('die', 'six');
            break;

    }
 if  (points === 1 && round === 0) {
        roundScore = 0
        totalscore = 0
       
    } 
     else if (points === 1) {
        round++
        roundScore = 0
           totalRounds.innerText = round
         
        //console.log(`u got a 1, round points are ${points}, you are now on round ${round},try again`)
        //console.log(round)
    } 
    else   {
        roundScore += points;
        //console.log(totalscore)
    }
roundPoints.innerText = roundScore;
totalPoints.innerText = totalscore

})








