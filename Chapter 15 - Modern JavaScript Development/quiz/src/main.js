import {
    view,
    game
} from './quiz.js';
// const url = 'http://spbooks.github.io/questions.json';
// fetch(url)
//     .then(res => res.json())
//     .then(quiz => {
//         view.start.addEventListener('click', () => game.start(quiz.questions), false);
//         view.response.addEventListener('click', (event) => game.check(event), false);
//     });

    const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
      },
      {
        name: "Wonderwoman",
        realName: "Dianna Prince"
      },
      {
        name: "Batman",
        realName: "Bruce Wayne"
      },
      {
        name: "The Hulk",
        realName: "Bruce Banner"
      },
      {
        name: "Spider-man",
        realName: "Peter Parker"
      },
      {
        name: "Cyclops",
        realName: "Scott Summers"
      }
    ];