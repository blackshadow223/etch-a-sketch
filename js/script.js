
const container = document.querySelector(".container-sq");
container.style.width = `${Math.round(window.innerWidth / 3)}px`;
container.style.height = `${Math.round(window.innerWidth / 3)}px`;


const numberOfSquaresInOneRow = 10;
const totalNumberOfSquares = numberOfSquaresInOneRow ** 2; // Squared
const widthOfSquare = container.clientWidth / numberOfSquaresInOneRow;


for (let i = 0; i < totalNumberOfSquares; ++i) {
    const square = document.createElement("div");
    square.setAttribute("class", "sq");
    square.style.width = `${widthOfSquare}px`;
    square.style.height = `${widthOfSquare}px`;
    square.style.opacity = 0;
    container.appendChild(square);
}

container.addEventListener("mouseover", (event) => {
    console.log(event.target.className);
    if (event.target.className === "sq") {
        event.target.style.backgroundColor = "blue";
        let opacity = +event.target.style.opacity;
        if (opacity < 1) {
            event.target.style.opacity = opacity + .1;
        }
    }
});
