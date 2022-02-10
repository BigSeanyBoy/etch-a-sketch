const gridSize = 640;

function resetBoard() {
    const squaresPerSide = prompt("How many squares would you like per side?");
    if (squaresPerSide < 16 && squaresPerSide) drawBoard(16)
    else if (squaresPerSide > 100) drawBoard(100);
    else if (squaresPerSide) drawBoard(squaresPerSide);
    else drawBoard(document.querySelectorAll('.grid-box').length ** 0.5);
}

function drawBoard(squaresPerSide) {    
    const container = document.querySelector(".grid-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < squaresPerSide; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");

        for (let j = 0; j < squaresPerSide; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.setAttribute("id", `${16 * i + j}`);
            gridBox.style.height = `${gridSize / squaresPerSide}px`;
            gridBox.style.width = `${gridSize / squaresPerSide}px`;

            gridBox.addEventListener("mouseover", () => {
                gridBox.classList.toggle("fill");
            });

            rowContainer.appendChild(gridBox);
        }

        container.appendChild(rowContainer);
    }
}

function main() {
    drawBoard(16);
}

main();