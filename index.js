let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let stopLightClasslist = stopLight.classList;

stopButton.addEventListener("click", () => {
  stopLight.classList.toggle("stop");
});

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let slowLightClasslist = slowLight.classList;

slowButton.addEventListener("click", () => {
  slowLight.classList.toggle("slow");
});

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
let goLightClasslist = goLight.classList;

goButton.addEventListener("click", () => {
  goLight.classList.toggle("go");
});

[stopButton, slowButton, goButton].forEach((button) => {
  button.addEventListener("mouseenter", () => {
    console.log(`Entered ${button.innerText} button`);
  });

  button.addEventListener("mouseleave", () => {
    console.log(`Left ${button.innerText} button`);
  });
});

let controls = document.getElementById("controls");
controls.addEventListener("click", (event) => {
  if (event.target === goButton) {
    if (goLightClasslist.length > 1) {
      console.log(`${event.target.textContent} bulb is on`);
    } else {
      console.log(`${event.target.textContent} bulb is off`);
    }
  } else if (event.target === slowButton) {
    if (slowLightClasslist.length > 1) {
      console.log(`${event.target.textContent} bulb is on`);
    } else {
      console.log(`${event.target.textContent} bulb is off`);
    }
  } else {
    if (stopLightClasslist.length > 1) {
      console.log(`${event.target.textContent} bulb is on`);
    } else {
      console.log(`${event.target.textContent} bulb is off`);
    }
  }
});
