'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `🎉 Correct number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
//those up there are classes in the html file
//now lets handle an input class file: document.querySelector(`.guess`).value; is gonna be empty, because nothing was insered yet. But when we put "=23", 23 is gonna be like the number it was imputted
//all these numbers were insered through JS. So it's JS interacting with DOM.
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//What if I would like to type 23 in the website and get here in the code only when the 'check' buttom is clicked?
//This is going to be the first time that our code reacts to something that happens in the DOM. For that, we need to use an event listener.
//An event is something that happens on the page. For example, a mouse click, a mouse moving, a key press, etc.
//Then, with the event listener, we can wait for a certain event to happen, and then react to it.
//In order to listen to an event, we first need to select the element where the event should happen. And in this case, we want to listen to check buttom element.
//we have to name the event after add an event listener, here it will be click. That's the first argument we pass to the function
//Then we need to tell the event listenet what to do. We need to specify the reaction to the click event. And we do that by defining a function. Esta funcao vai ter o exatamente o codigo que a gente precisa pra acao que a gente quer quando tiver a porra do click
//This function is gonna be called the event handler.
//The method 'addEventListener' is a special kind of function. That's because, as a second argument, it expects this event handler function. So next to 'click', we now need to pass in a function value as an argument.
//Remember that a function is also just a value. So, we can pass it to another function as an argument. So we create the function there.

//when we use the if with the condition !guess, meaning no guess, is because if we press the check buttom with it empty, it will return 0 and the number 0 is a falsy.
//And any value that's in the () of the if condition will always get evaluated to a boolean.

//NÚMERO SECRETO
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0; //we start with 0 because the first score is always gonna be the highest score, because it's always gonna be greater than zero.
//multiplying by 20 it will be 0 and 19.9498 or something close to 20, thats why i add 1
// document.querySelector(`.number`).textContent = secretNumber;

//vou criar uma funcao para nao ter que escrever a mesma coisa o tempo todo:
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//BOTÃO
document.querySelector(`.check`).addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector(`.guess`).value);

    //when there is no input
    if (!guess) {
      // document.querySelector(`.message`).textContent = `⛔️ No number!`;
      displayMessage(`⛔️ No number!`);

      //when player wins
    } else if (guess === secretNumber) {
      // document.querySelector(`.message`).textContent = `Acertô miseravii! 🤠🏆`;
      displayMessage(`Acertô miseravii! 🤠🏆`);
      document.querySelector(`.number`).textContent = secretNumber;

      document.querySelector(`body`).style.backgroundColor = `#60b347`;

      document.querySelector(`.number`).style.width = `40rem`;

      if (score > highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(`.message`).textContent =
        //   guess > secretNumber
        //     ? `Errô 🐴. O número é menor, burro!`
        //     : `Errô 🐴. O número é maior, burro!`;
        displayMessage(guess > secretNumber ? ` Too high` : ` Too low`);
        score--;
        document.querySelector(`.score`).textContent = score;
      } else {
        // document.querySelector(
        // `.message`
        // ).textContent = `Perdeu, burro! 🐴 😭😭`;
        displayMessage(`Perdeu, burro! 🐴 😭😭`);
        document.querySelector(`.score`).textContent = 0;
      }
    }
  },
  //     //when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(
  //         `.message`
  //       ).textContent = `Errô 🐴. O número é menor, burro! `;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `Perdeu, burro! 🐴 😭😭`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(
  //         `.message`
  //       ).textContent = `Errô 🐴. O número é maior, burro! `;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `Perdeu, burro! 🐴 😭😭`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
  // });

  //SCORE
  //The score is set at 20. To change it, it's only decrease it by 1 everytime someone made a mistake. We have two ways to do that: 1. To read the score there(in the HTML????) then decrease it by one and then print it again. 2. Create a variable for the score in the code, and then update that variable, so basically to decrease that variable, and then display the value of that variable in the score label. And by doing that, we have our data also in the code and not just on the DOM. And thats always a good thing to do.
  //the variable SCORE can also be called a "state variable". Because the score is part of the so-called application state, which is basically all the data that's relevant to the application. Same happen with the secretNumber.
  //WE WANT THE DATA TO BE AVAILABLE NOT ONLY IN THE DOM, BUT ALSO IN A OUR CODE. O que eu entendi eh que o que ta no html/o que aparece no navegador eh o dom nesse caralho???

  //challenge

  document.querySelector(`.again`).addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    // document.querySelector(`.message`).textContent = `Start guessing...`;
    displayMessage(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = '';

    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
  })
);
