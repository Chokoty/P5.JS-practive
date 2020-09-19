var cols, rows;
var w = 10; //make 10 cols, rows
var grid = []; //make an array.

var current;

var stack = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w); //make certain this is integer.
  rows = floor(height / w);
  //frameRate(5);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell); //make a cell and put it in grid array.
    }
  }

  current = grid[0]; //current를 시작점으로  초기화

}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  var next = current.checkNeighbors(); //checkNeighbors가 이웃이 있으면 반환할거니까 변수에 넣어주고
  if (next) { //이웃이 있다면 고른 이웃으로 넘어감
    next.visited = true;

    //  STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
    noStroke();
    fill(0,200,255,100);
    rect(current.i*w,current.j*w,w,w);
  }


}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  //for check console.log('remove');
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
    console.log(a);

  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}