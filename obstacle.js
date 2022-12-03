const obstacle = [
  {
    top: 690 - 50,
    left: 850,
    width: 50,
    height: 50,
  },
  {
    top: 690 - 120,
    left: 650,
    width: 40,
    height: 120,
  },
  {
    top: 640,
    left: 300,
    width: 50,
    height: 50,
  },
  {
    top: 640,
    left: 1300,
    width: 100,
    height: 50,
  },
  {
    top: 690,
    left: 1000,
    width: 80,
    height: 200,
  },
];
obstacle.map((obstacle) => {
  let div = document.createElement("div");
  div.style.top = obstacle.top + "px";
  div.style.left = obstacle.left + "px";
  div.style.width = obstacle.width + "px";
  div.style.height = obstacle.height + "px";
  div.style.backgroundColor = "rgb(255,0,0)";
  div.style.position = "absolute";
  document.body.appendChild(div);
});
