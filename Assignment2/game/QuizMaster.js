import readlineSync from 'readline-sync';
import Player from "./Player.js";
import questionBank from '../data/questions.js'

class QuizMaster{
    constructor(){
        // Copying all questions so we can filter and use them as needed
        this.questions = questionBank.slice() || [];
        
        // Player details will be assigned when game starts
        this.player = null;
        
        // User-selected category and difficulty
        this.category = "";
        this.difficulty = "";
        
        // Total number of questions in one quiz session
        this.totalQuestions = 10;
    }

    // This function kicks off the entire game
    start(){
        console.log('Welcome in game');

        // Asking player’s name
        const name = readlineSync.question("Enter your name: ");
        
        // Creating a new Player instance
        this.player = new Player();
        this.player.setName(name);

        // Letting player choose the category and difficulty
        this.chooseCategory();
        this.chooseDifficulty();

        console.log(`Let's start the quiz ...`);
        
        // Running the question loop
        this.runQuiz();
        
        // Showing final results
        this.showFinalRank();
    }

    // Shows category list and asks user to pick one
    chooseCategory(){
        console.log('Choose category ... \n');

        // Extract unique categories
        const categories = [... new Set(this.questions.map(q => q.category))];

        // Displaying all categories
        categories.forEach((q, idx) => {
            console.log(`${idx + 1} : ${q}`);
        })

        const choice = readlineSync.question(`Choose number : `).trim();
        let chosen = null;
    
        // If user enters a valid number
        if(/^\d+$/.test(choice)){
            const idx = parseInt(choice, 10) - 1;
            if(idx >= 0 && idx < categories.length){
                chosen = categories[idx];
            }
        }

        // If user chooses wrong input, ask again
        if (!chosen) {
            console.log("Interesting choice… but no. Try again.");
            return this.chooseCategory();
        }
        this.activeCategory = chosen;
        console.log("You selected: " + this.activeCategory);
    }

    // Asks user for difficulty level
    chooseDifficulty(){
        console.log("\nChoose Difficulty:");
        console.log("Easy / Medium / Hard");

        const diff = readlineSync.question("Your choice: ").trim();
        const lower = diff.toLowerCase();

        if (lower === "easy") this.activeDifficulty = "Easy";
        else if (lower === "medium") this.activeDifficulty = "Medium";
        else if (lower === "hard") this.activeDifficulty = "Hard";
        else {
            console.log("That is… not a difficulty. Try again.");
            return this.chooseDifficulty();
        }
        console.log("Difficulty locked: " + this.activeDifficulty);
    }

    // Main quiz loop
    runQuiz() {
        let count = 0;

        while (count < this.totalQuestions) {
            const q = this.getRandomQuestion();

            console.log("\n---");
            console.log(`Category: ${q.category}`);
            console.log(`Difficulty: ${q.difficulty}`);
            console.log(`Q: ${q.questionText}`);

            const ans = readlineSync.question("Your answer: ").trim();

            // Check if answer is correct
            const correct = this.checkAnswer(q, ans);

            if (correct) {
                const gain = this.player.applyCorrect(this.activeDifficulty);
                this.commentOnAnswer(true);
                console.log(`You gained +${gain}`);
            } else {
                const loss = this.player.applyWrong(this.activeDifficulty);
                this.commentOnAnswer(false);
                console.log(`You lost ${loss}`);
            }

            this.player.showScore();
            count += 1;
        }
    }
    
    // Picks a random question from the chosen category & difficulty
    getRandomQuestion() {
        const filtered = this.questions.filter(q =>
            q.category === this.activeCategory && q.difficulty === this.activeDifficulty
        );

        const pool = filtered.length > 0 ? filtered : this.questions;

        if (pool.length === 0) {
            throw new Error("ERROR: No questions available at all.");
        }

        const index = Math.floor(Math.random() * pool.length);
        return pool[index];
    }

    // Checks if the user's input matches the answer
    checkAnswer(q, playerInput) {
        if (!playerInput) return false;
        return playerInput.trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
    }

    // Prints a fun comment based on correctness
    commentOnAnswer(isCorrect) {
        if (isCorrect) {
            console.log("Well, someone paid attention in school!");
        } else {
            console.log("Close… if we were grading on imagination.");
        }
    }

    // Final score and rank display
    showFinalRank() {
        const final = this.player.score;

        console.log("\n=== Final Results ===");
        console.log(`Player: ${this.player.name}`);
        console.log("Final Score: " + final);

        if (final >= 80) {
            console.log("Score Rank: Quiz Royalty has arrived!");
        } else if (final >= 50) {
            console.log("Score Rank: Quiz Master in training.");
        } else {
            console.log("Score Rank: Better luck next time, genius.");
        }
    }
}

export default QuizMaster;
