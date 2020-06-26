let snow = []
//let im = loadImage('me.jpg')
var im

function setup() {
  im = loadImage('me.jpg')
  createCanvas(windowWidth, windowHeight)
  //background(164,64,0)
  
}

function windowResized() {
  im.resize(windowWidth, windowHeight)
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  im.resize(windowWidth, windowHeight)
  background(0)
  image(im,0,0)
  snow.push(new snowFall())
  for (const s of snow) {
    s.update()
    s.show()

    if(s.outOfScreen()){
      snow.splice(s,1)
    }

  }


}
