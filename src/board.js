class Board {
    // constructor that creates the board
    constructor() {
        this.board = this.createGraph();
    }

    // create graph
    createGraph() {
        const graph = {};
        
        // iterate through columns
        for (let y = 0; y <= 7; y++){
             // iterate through rows
            for (let x = 0; x <= 7; x++){
                // Check if y already exist in graph, if not create a key of y
                if(!(y in graph)) graph[y] = [];
                graph[y].push(x);
            }
        }
    
        return graph;
    }
}

export default Board;


/*  0 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    1 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    2 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    3 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    5 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    6 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    7 : ["0", "1", "2", "3", "4", ""5, "6", "7"] */