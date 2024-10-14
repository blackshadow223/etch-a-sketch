
const container = document.querySelector(".container-sq");
const numberButton = document.querySelector(".number");
const colorButton = document.querySelector(".color");
const numberSpan = document.querySelector("#currentSqNo");
const colorSpan = document.querySelector("#currentColor");
container.style.width = `${Math.round(window.innerWidth / 3)}px`;
container.style.height = `${Math.round(window.innerWidth / 3)}px`;


let numberOfSquaresInOneRow = 16;
let totalNumberOfSquares = numberOfSquaresInOneRow ** 2; // Squared
let widthOfSquare = container.clientWidth / numberOfSquaresInOneRow;
let randomColor = false;

function drawSquares(totalNumberOfSquares, widthOfSquare) {
    for (let i = 0; i < totalNumberOfSquares; ++i) {
        const square = document.createElement("div");
        square.setAttribute("class", "sq");
        square.style.width = `${widthOfSquare}px`;
        square.style.height = `${widthOfSquare}px`;
        square.style.opacity = 0;
        container.appendChild(square);
    }
}
drawSquares(totalNumberOfSquares, widthOfSquare);


numberButton.addEventListener("click", () => {
    do {
        numberOfSquaresInOneRow = +prompt("Enter a number between 1 and 100: ");
    } while (numberOfSquaresInOneRow > 100 || numberOfSquaresInOneRow < 1);

    numberSpan.textContent = `${numberOfSquaresInOneRow}x${numberOfSquaresInOneRow}`;

    totalNumberOfSquares = numberOfSquaresInOneRow ** 2; // Squared
    widthOfSquare = container.clientWidth / numberOfSquaresInOneRow;

    // Remove All children of container
    container.replaceChildren();

    // Draw again
    drawSquares(totalNumberOfSquares, widthOfSquare);
});

colorButton.addEventListener("click", () => {
    if (colorSpan.textContent === "Black") {
        colorSpan.textContent = "Rainbow";
        randomColor = true;
    } else {
        colorSpan.textContent = "Black";
        randomColor = false;
    }
});

container.addEventListener("mouseover", (event) => {
    if (event.target.className === "sq") {
        if (randomColor) {
        event.target.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        } else {
            event.target.style.backgroundColor = "black";
        }
        let opacity = +event.target.style.opacity;
        if (opacity < 1) {
            event.target.style.opacity = opacity + .2;
        }
    }
});
