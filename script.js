// Create 16x16 grid of divs

const GRID_WIDTH = 960
const GRID_HEIGHT = 800
const INITIAL_SIZE = 16
const MAX_SIZE = 100

let grid = document.querySelector(".grid")

populateGrid(INITIAL_SIZE)

newGridBtn = document.querySelector("#new-grid-btn")

newGridBtn.addEventListener("click", () => {
    let newGridSize = prompt("Please enter the number of squares per side for the new grid: ")

    while (newGridSize > MAX_SIZE || newGridSize < 1) {
        newGridSize = prompt("Please enter a number between 1 and 100")
    }

    grid.remove()
    grid = document.createElement("div")
    grid.classList.add("grid")
    document.body.appendChild(grid)
    populateGrid(newGridSize)
})

function populateGrid(gridSize) {
    let newSquare = null
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // create a square
            newSquare = document.createElement("div")
            newSquare.id = `square${j}-${i}`
            newSquare.classList.add("square")
            newSquare.style.minWidth = `${100 / gridSize}%`
            newSquare.style.minHeight = `${100 / gridSize}%`

            // add a hover effect
            newSquare.addEventListener("mouseenter", handleHover);

            grid.appendChild(newSquare)
        }
    }
}

function handleHover() {
    this.classList.add("hover")
}

