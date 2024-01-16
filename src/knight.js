import Board from "./board";

const moves = [[2, 1],[1, 2],[-2, 1],[-1, 2],[2, -1],[1, -2],[-2, -1],[-1, -2]];

// Return possible moves from the given node
function getMoves(board, src) {
    let [x, y] = src;
    const possibleMoves = [];
    // Iterate through predefined moves and check if the new position is valid on the board
    for (const move of moves) {
        let newX = x + move[0];
        let newY = y + move[1];

        if (board[newX] && board[newX][newY] !== undefined) {
            possibleMoves.push([newX, newY]);
        }
    }

    return possibleMoves;
}

// BFS to find the shortest path from source to destination
function knightMoves(board, src, dst) {
    const visited = new Set();
    const queue = [[src]];

    // Main BFS loop
    while (queue.length > 0) {
        const currentPath = queue.shift();
        const current = currentPath[currentPath.length - 1];
        const [x, y] = current;

        const currentString = current.toString();

        // Check if the destination is reached
        if (x === dst[0] && y === dst[1]) {
            console.log("Found it! Shortest path:", currentPath);
            return currentPath;  // Return the shortest path
        }

        // Explore possible moves from the current position
        if (!visited.has(currentString)) {
            visited.add(currentString);
            const currentMoves = getMoves(board, current);
            for (const move of currentMoves) {
                // Create a new path by appending the current move
                const newPath = [...currentPath, move];
                queue.push(newPath);
            }
        }
    }

    // If no path to the destination is found
    return "No path found to the destination.";
}

// Create a new chessboard instance
const chessBoard = new Board();
