const MAX_GRID_SIZE = 100;
const FILL_MODES = ['black', 'rainbow'];
var mode = 'rainbow';

function getColor(mode) {
  if(mode == 'black')
    return 'black';
  else if(mode == 'rainbow')
  {
    const randomInt = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomInt);
    return `#${randomInt}`;
  }
    
}

function generateGrid(gridSize = 16) {
  if(gridSize > MAX_GRID_SIZE)
  {
    alert(`Grid size cannot be greater than ${MAX_GRID_SIZE}`);
    return;
  }

  clearGrid();

  const containerElm = document.getElementById("container");
  const containerWidth = window.getComputedStyle(containerElm).width;
  const squareWidth = parseInt(containerWidth) / gridSize;

  for(let i = 0; i < gridSize; i++)
  {
    let divRowElm = document.createElement("div");
    divRowElm.classList.add("row");
    divRowElm.style.height = `${squareWidth}px`;

    for(let j = 0; j < gridSize; j++)
    {
      let divPixelElm = document.createElement("div");
      divPixelElm.classList.add("pix");
      divPixelElm.style.width = `${squareWidth}px`;
      divPixelElm.addEventListener('mouseenter', function() {
        let backgroundColor = divPixelElm.style.backgroundColor;
        if(backgroundColor === '')
          divPixelElm.style.backgroundColor = getColor(mode);
      });

      divRowElm.appendChild(divPixelElm);
    }

    containerElm.appendChild(divRowElm);
  }
}

function onClickNewGrid() {
  const userInput = prompt("Enter the grid size (1-100):");
  if(userInput === null)
    return;

  generateGrid(parseInt(userInput));
}

function clearGrid() {
  const containerElm = document.getElementById("container");
  containerElm.innerHTML = "";
}

function onChangeMode() {
  const modeBtnElm = document.getElementById("mode-btn");
  mode = mode === 'black' ? 'rainbow' : 'black';

  if(mode === 'black') {
    modeBtnElm.classList.remove('rainbow-background');
    modeBtnElm.classList.add('black-background');
  }
  else {
    modeBtnElm.classList.remove('black-background');
    modeBtnElm.classList.add('rainbow-background');
  }
}
