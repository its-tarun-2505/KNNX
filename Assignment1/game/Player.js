class Player {
    constructor(name) {
        // Player related data
        this.name = name;
        this.inventory = [];
        this.currentRoom = null;
    }

    // Adds an item to the player's inventory
    pick(item) {
        this.inventory.push(item);
        console.log(`You pick up ${item}.`);
    }

    // Displays everything the player is carrying
    showInventory() {
        if (this.inventory.length === 0) {
            console.log("You aren't carrying anything.");
        } else {
            console.log("Your backpack contains:", this.inventory.join(", "));
        }
    }

    // Attempts to move the player in a direction
    move(direction, rooms) {
        const nextRoom = this.currentRoom.exits[direction];

        if (!nextRoom) {
            console.log("You bump into a wall. Try another direction.");
            return;
        }

        this.currentRoom = rooms[nextRoom];
        console.log(`You head ${direction} into ${nextRoom}.`);
    }
}

export default Player;
