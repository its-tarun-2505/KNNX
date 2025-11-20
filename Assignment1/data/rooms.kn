// Collection of all rooms that form the world
const roomData = [
    {
        name: "Entrance",
        description: "You stand at the grand entrance. The air smells like mystery.",
        items: ["map"],
        exits: { north: "Hallway" }
    },
    {
        name: "Hallway",
        description: "A long hallway with flickering torches. A whisper echoes faintly.",
        items: [],
        exits: { south: "Entrance", east: "Treasure Room", west: "Dark Chamber" }
    },
    {
        name: "Treasure Room",
        description: "Golden walls surround a locked treasure chest.",
        items: ["goldenkey"],
        exits: { west: "Hallway" },
        puzzle: "LockedDoorPuzzle"
    },
    {
        name: "Dark Chamber",
        description: "The darkness here feels alive. A faint drip breaks the silence.",
        items: [],
        exits: { east: "Hallway" },
        puzzle: "TorchPuzzle"
    }
];

export default roomData;
