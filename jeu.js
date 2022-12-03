const personage = document.getElementById("personage");
let a = 0;

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (parseInt(personage.style.left) + 50 < document.body.clientWidth) {
    if (event.key === "ArrowRight") {
      personage.style.left = parseInt(personage.style.left) + 100 + "px";
    }
  }

  if (parseInt(personage.style.left) > 0) {
    if (event.key === "ArrowLeft") {
      personage.style.left = parseInt(personage.style.left) - 100 + "px";
    }
  }
  console.log(obstacle);

  perdu();
  if (event.key === "ArrowUp" && a < 1) {
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) - 100 + "px";
    //     perdu();
    //   }, 40);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) - 80 + "px";
    //     perdu();
    //   }, 80);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) - 60 + "px";
    //     perdu();
    //   }, 120);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) - 40 + "px";
    //     perdu();
    //   }, 160);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) - 20 + "px";
    //     perdu();
    //   }, 200);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) + 20 + "px";
    //     perdu();
    //   }, 240);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) + 40 + "px";
    //     perdu();
    //   }, 280);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) + 60 + "px";
    //     perdu();
    //   }, 320);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) + 80 + "px";
    //     perdu();
    //   }, 360);
    //   setTimeout(() => {
    //     personage.style.top = parseInt(personage.style.top) + 100 + "px";
    //     perdu();
    //   }, 400);
    // a = a + 1;
    // setTimeout(() => {
    //   a = a - 1;
    //   perdu();
    // }, 500);
    // }
    // perdu();
    saut(-100);
    // a = a + 1;
    // setTimeout(() => {
    //   a = a - 1;
    //   perdu();
    // }, 500);
  }
});
let isJumping = false;

function saut(pas) {
  if (
    ((isJumping && pas !== -100) || (!isJumping && pas === -100)) &&
    pas !== 120
  ) {
    isJumping = true;
    setTimeout(() => {
      personage.style.top = parseInt(personage.style.top) + pas + "px";
      perdu();
      saut(pas + 20);
    }, 50);
  } else if (pas === 120) isJumping = false;
}

function perdu() {
  let pl = parseInt(personage.style.left);
  let pw = parseInt(personage.style.width);
  let pt = parseInt(personage.style.top);
  let ph = parseInt(personage.style.height);
  const collision = obstacle.some(
    ({ top: et, left: el, width: ew, height: eh }) =>
      (((el <= pl + pw && pl + pw <= el + ew) || (el <= pl && pl <= el + ew)) &&
        ((et <= pt + ph && pt + ph <= et + eh) ||
          (et <= pt && pt <= et + eh))) ||
      (((pl <= el + ew && el + ew <= pl + pw) || (pl <= el && el <= pl + pw)) &&
        ((pt <= et + eh && et + eh <= pt + ph) || (pt <= et && et <= pt + ph)))
  );
  if (collision === true) {
    if (isJumping)
      setTimeout(() => {
        personage.style.left = 20 + "px";
        personage.style.top = 640 + "px";
      }, 560);
    setTimeout(() => {
      console.log("perdu");
      if (isJumping)
        setTimeout(() => {
          personage.style.left = 20 + "px";
          personage.style.top = 640 + "px";
        }, 610);
      personage.style.left = 20 + "px";
      personage.style.top = 640 + "px";
    }, 50);
  }
}
