const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;

const colorContainer = document.querySelector(".color-container");
const colorInput = document.querySelector('input[type="color"]');
const colorScheme = document.getElementById("color-scheme");
const generateBtn = document.getElementById('generate-btn');

let colorArray = [];
let colorSelected = "";
let colorSchemeSelected = colorScheme.value;

colorInput.addEventListener("change", () => {
  colorSelected = colorInput.value;
});

colorScheme.addEventListener("change", () => {
  colorSchemeSelected = colorScheme.value;
});

generateBtn.addEventListener('click', render);

colorContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('color-hex') || e.target.classList.contains('color-block')){
    
    let hexElement = e.target.classList.contains('color-hex') 
      ? e.target 
      : e.target.nextElementSibling; 
      
    const originalText = hexElement.innerText;
    
    navigator.clipboard.writeText(originalText).then(() => {
      hexElement.innerText = "Copied!";
      setTimeout(() => {
        hexElement.innerText = originalText;
      }, 1500);
    });
  }
});

function renderRandomHex() {
  colorInput.value = randomHexColor();
  colorSelected = colorInput.value;
}

function fetchColorArray(color, scheme) {
  return fetch(
    `https://www.thecolorapi.com/scheme?hex=${color.replace("#", "")}&mode=${scheme}&count=5`,
  )
    .then((res) => res.json())
    .then((data) => {
      colorArray = data.colors.map((color) => color.hex.value);
      return colorArray;
    });
}

function render() {

  let html = "";

  fetchColorArray(colorSelected, colorSchemeSelected).then((colors) => {
    colors.forEach((color) => {
      html += `
        <div class="color-column">
          <div class="color-block" style="background-color: ${color}"></div>
          <p class="color-hex">${color}</p>
        </div>
      `;
    });

    colorContainer.innerHTML = html;
  });
}

renderRandomHex();
render();
