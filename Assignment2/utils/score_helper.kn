// A tiny helper that rewards points based on difficulty level
function increaseScore(difficulty){
    if (difficulty === "Easy") return 5;
    if (difficulty === "Medium") return 10;
    if (difficulty === "Hard") return 15;
    return 0; // fallback in case someone enters something weird
}

// Calculates penalties when the player gets something wrong
function getPenalty(difficulty) {
    if (difficulty === "Easy") return -2;
    if (difficulty === "Medium") return -5;
    if (difficulty === "Hard") return -7;
    return 0;
}

// Gives small bonus points when the player answers multiple questions correctly in a row
function applyBonus(score, streak) {
    if (streak >= 3) return score + 5; // bonus after a streak of 3+
    return score;
}

export { increaseScore, getPenalty, applyBonus };