// Create 16x16 grid of divs

let gridY = 16
let gridX = 16

let newSquare = null

const grid = document.querySelector(".grid")

for (let i = 0; i < gridY; i++) {
    for (let j = 0; j < gridX; j++) {
        newSquare = document.createElement("div")
        newSquare.id = `square${j}-${i}`
        newSquare.classList.add("square")
        newSquare.style.width = `${Math.floor(100 / gridX)}%`
        newSquare.style.width = `${Math.floor(100 / gridY)}%`
        grid.appendChild(newSquare)
    }
}