function setup() {
  createCanvas(windowWidth, windowHeight)
  strokeWeight(3)

  sliderObject =function(){
    this.no_of_circles = 3
    this.radius = 70
  }

  slidertext = new sliderObject()

  slider = new dat.GUI()
  slider.add(slidertext,'no_of_circles', 2,9 )
  slider.add(slidertext, 'radius', 50, 100)
}

var tangle = 0
var wave = []

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(126,64,0)
  translate(width/4,height/2)
  var x = 0
  var y = 0
  for(let i=0;i<slidertext.no_of_circles;i++){
    let prevx = x
    let prevy = y
    let n = i*2+1
    var radius = slidertext.radius*(4/(n*PI))
    x+= radius*cos(n*tangle)
    y+=radius*sin(n*tangle)
    if (wave.length>900){
      wave.pop()
    }
    noFill()
    strokeWeight(1)
    circle(prevx, prevy, radius*2)
    strokeWeight(3)

    stroke('#11FFDD')

    line(prevx, prevy, x, y)

    stroke('#0000FF')
  }
  wave.unshift(y)

  translate(radius*2,0)
  line(x-radius*2,y,0,wave[0])

  stroke('#FF00ff')

  beginShape()
  for(let i = 0;i<wave.length;i++){
    vertex(i,wave[i])
  }
  endShape()

  stroke(0)

  tangle+=0.05
}
