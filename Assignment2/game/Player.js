import { getPenalty, increaseScore, applyBonus } from '../utils/score_helper.js';

class Player {
  constructor(name) {
    // Basic player info
    this.name = name;
    this.score = 0;
    this.streak = 0; // counts how many correct answers in a row
  }

  // Updates player name if valid
  setName(newName) {
    if (newName && newName.trim().length > 0) {
      this.name = newName.trim();
    }
  }

  // Resets everything for a fresh start
  resetScore() {
    this.score = 0;
    this.streak = 0;
  }

  // Adds points when the user answers correctly
  applyCorrect(difficulty) {
    const base = increaseScore(difficulty);
    this.streak += 1;

    const totalGain = applyBonus(base, this.streak);
    this.score += totalGain;

    return totalGain;
  }

  // Reduces score and breaks streak for wrong answers
  applyWrong(difficulty) {
    const penalty = getPenalty(difficulty);
    this.streak = 0;
    this.score += penalty;
    return penalty;
  }

  // Shows current score and streak
  showScore() {
    console.log(`Current Score: ${this.score}`);
    console.log(`Streak: ${this.streak}`);
  }
}

export default Player;
