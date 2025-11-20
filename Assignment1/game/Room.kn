class Room {
    constructor({ name, description, items, exits, puzzle }) {
        // Core details of a room
        this.name = name;
        this.description = description;

        // Objects placed in this room
        this.items = items;

        // Directions that lead to other rooms
        this.exits = exits;

        // Optional puzzle assigned to this room
        this.puzzle = puzzle;
        this.isPuzzleSolved = false;
    }

    // Displays what the player sees when entering the room
    showDetails() {
        console.log("You are in", this.name);
        console.log(this.description);

        if (this.items.length > 0) {
            console.log("You see:", this.items.join(", "));
        } else {
            console.log("No items are visible here.");
        }

        console.log("Paths available:", Object.keys(this.exits).join(", "));
    }
}

export default Room;
