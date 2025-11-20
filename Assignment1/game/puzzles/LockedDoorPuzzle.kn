function LockedDoorPuzzle(player, room) {
    // Solves only if player has the golden key
    if (player.inventory.includes("goldenkey")) {
        console.log("Your golden key fits perfectly! The chest unlocks.");
        room.isPuzzleSolved = true;
    } else {
        console.log("The chest refuses to open. Something shiny might help…");
    }
}

export default LockedDoorPuzzle;
