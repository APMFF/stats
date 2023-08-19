import scores from "./fbdb.js";

setTimeout(() => {
  scores.forEach((score) => {
    score.win = Number(score.win);
    score.lose = Number(score.lose);
  });

  scores.forEach((score) => {
    for (let i = 0; i < scores.length; i++) {
      if (score.win === scores[i].win) {
        if (score.lose === scores[i].lose) {
          score.frequency++;
        }
      }
    }
  });

  const scoreGraph = document.querySelector(".score-graph");
  const colors = ["green", "blue", "red", "purple", "yellow"];
  let highestWin = 191;
  let lowestWin = 57;
  let highestLoss = 153;
  let lowestLoss = 43;

  for (const score of scores) {
    if (highestWin < score.win) {
      highestWin = score.win;
    }
    if (lowestWin > score.win) {
      lowestWin = score.win;
    }
    if (highestLoss < score.lose) {
      highestLoss = score.lose;
    }
    if (lowestLoss > score.lose) {
      lowestLoss = score.lose;
    }
  }

  const addElement = (boxDimensionWidth, boxDimensionHeight, color) => {
    const scoreDiv = document.createElement("div");
    // scoreDiv.setAttribute("id", Math.floor(Math.random() * 100000));
    scoreDiv.classList.add("score-box");
    scoreDiv.style.width = boxDimensionWidth;
    scoreDiv.style.height = boxDimensionHeight;
    scoreDiv.style.backgroundColor = color;

    scoreGraph.appendChild(scoreDiv);
  };

  const addDivider = () => {
    const divider = document.createElement("div");
    divider.classList.add("divider");
    scoreGraph.appendChild(divider);
  };

  const addLossSpan = (loopNum) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = loopNum;
    spanElement.classList.add("loss-number");
    scoreGraph.appendChild(spanElement);
  };
  const addWinSpan = (loopNum) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = loopNum;
    spanElement.classList.add("win-number");
    scoreGraph.appendChild(spanElement);
  };

  let boxDimensionsWidth = (1 / (highestWin - highestLoss)) * 100 + "%";
  let boxDimensionsHeight = (1 / (lowestWin - lowestLoss)) * 100 + "%";

  for (let j = lowestWin; j <= highestWin; j++) {
    addWinSpan(j);
  }
  addDivider();
  for (let i = lowestLoss; i <= highestLoss; i++) {
    for (let j = lowestWin; j <= highestWin; j++) {
      if (
        scores.find(
          (score) =>
            score.win === j && score.lose === i && score.frequency === 1
        )
      ) {
        addElement(boxDimensionsWidth, boxDimensionsHeight, "green");
      } else if (
        scores.find(
          (score) =>
            score.win === j && score.lose === i && score.frequency === 2
        )
      ) {
        addElement(boxDimensionsWidth, boxDimensionsHeight, "blue");
      } else if (
        scores.find(
          (score) =>
            score.win === j && score.lose === i && score.frequency === 3
        )
      ) {
        addElement(boxDimensionsWidth, boxDimensionsHeight, "red");
      } else if (
        scores.find(
          (score) =>
            score.win === j && score.lose === i && score.frequency === 4
        )
      ) {
        addElement(boxDimensionsWidth, boxDimensionsHeight, "purple");
      } else if (
        scores.find(
          (score) => score.win === j && score.lose === i && score.frequency >= 5
        )
      ) {
        addElement(boxDimensionsWidth, boxDimensionsHeight, "yellow");
      } else {
        addElement(boxDimensionsWidth, boxDimensionsHeight);
      }
    }
    addLossSpan(i);
    addDivider();
  }
  console.log(scores);
}, 2000);
