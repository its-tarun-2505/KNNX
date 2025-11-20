function TorchPuzzle(player, room) {
    // Requires map to navigate the dark chamber
    if (player.inventory.includes("map")) {
        console.log("You follow the map and find your way through the dark.");
        room.isPuzzleSolved = true;
    } else {
        console.log("It's way too dark. You need guidance — maybe a map?");
    }
}

export default TorchPuzzle;
