import questions from './data/questions.js';
import QuizMaster from './game/QuizMaster.js';

// Creating a new QuizMaster and giving it our questions
const quiz = new QuizMaster(questions);

// Starting the quiz experience
quiz.start();