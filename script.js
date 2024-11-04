// Create 16x16 grid of divs

const gridWidth = 960
const gridHeight = 800

let gridY = 16
let gridX = 16

let newSquare = null

const grid = document.querySelector(".grid")

for (let i = 0; i < gridY; i++) {
    for (let j = 0; j < gridX; j++) {
        // create a square
        newSquare = document.createElement("div")
        newSquare.id = `square${j}-${i}`
        newSquare.classList.add("square")
        newSquare.style.width = `${Math.floor(gridWidth / gridX)}px`
        newSquare.style.height = `${Math.floor(gridHeight / gridY)}px`

        newSquare.addEventListener("mouseenter", handleHover);

        grid.appendChild(newSquare)
    }
}

function handleHover() {
    this.classList.add("hover")
}

