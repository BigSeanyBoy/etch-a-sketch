function main() {
    const container = document.querySelector(".grid-container");

    for (let i = 0; i < 16; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        console.log(rowContainer);

        for (let j = 0; j < 16; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.setAttribute("id", `${16 * i + j}`);

            gridBox.addEventListener("mouseover", () => {
                gridBox.classList.toggle("fill");
            });

            rowContainer.appendChild(gridBox);
        }

        container.appendChild(rowContainer);
    }
}

main();