// HENISH PATEL 

let grid, img, rows, cols, colorMap, textFile;

function preload(){
  textFile = loadStrings("assets/info.txt");
  img = loadStrings("assets/colorImage.txt");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();
  rows = img.length; cols = img[0].length;

  grid = [];
  for(let i = 0; i < rows; i++){
    grid.push([...img[i]]);
  }

  colorMap = new Map([
    ["b", "red"],
    ["w", "white"],
    ["r", "black"],
    ["l", "grey"],
    ["p", color(300,300,300)]
  ]);

}



function draw() {
  background(220);
  renderGrid();
}

function windowReszied(){
  createCanvas(windowWidth, windowHeight);
}

function renderGrid(){
  let cellWidth = width/cols;
  let cellHeght = height/rows;

  for(let x=0; x<cols; x++){
    for(let y=0; y<rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeght, cellWidth, cellHeght);

    }
  }
}

function processText(){
  // print("SPLIT INTO WORDS");
  // let splitWords = textFile[0].split(" ");
  // print(splitWords);

  // print("SPLIT INTO CHARS");
  // let splitChars = textFile[1].split(" ");
  // print(splitChars);

  // print("SPREAD int chars");
  // let spreadChars = [...textFile[2]];
  // print(spreadChars);

}