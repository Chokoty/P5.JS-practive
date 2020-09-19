// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('sketch blah');

//오류가 생겨서 instance mode로 리팩토링한것
//전역변수에 구분해서 붙여주는것
const s = function(sketch) {
    sketch.setup = () => {
    document.body.style['userSelect'] = 'none';//사용자가 요소를 선택했는지 구분해주는 부분
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  };

  sketch.draw = () => {
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};

let myp5 = new p5(s);

