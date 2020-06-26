class snowFall{


    constructor(){
        this.x = random(width)
        this.y = random(-10,-100)
        this.r = constrain(pow(random(1), 6)*32,4,32)
        this.pos = createVector(this.x,this.y)
        this.vel = createVector()
        this.acc = createVector(0,0.1)

    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)

    }

    outOfScreen(){
        return this.pos.y>width+this.r

    }

    show(){
        strokeWeight(this.r)
        stroke(255)
        point(this.pos.x, this.pos.y)

    }




}