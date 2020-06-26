def setup():
    size(800,800)
    strokeWeight(3)
    
tangle = 0   
wave = [] 

def draw():
    background(126, 64,0)
    global radius, tangle, x , y 
    
    translate(width/4,height/2)
    x = 0
    y = 0
    
    for i in range(4):
        prevx = x
        prevy = y
        n = i*2+1
        radius = 70*(4/(n*PI))
        x += radius*cos(n*tangle)
        y += radius*sin(n*tangle)
        if len(wave)>550:
            wave.pop()
        
        noFill()
        strokeWeight(1)
        circle(prevx,prevy,radius*2)
        strokeWeight(3)
        
        '''fill(0)
        circle(x,y,8)
        noFill()'''
        
        stroke("#11FFDD")
        
        line(prevx,prevy,x,y)
        
        stroke("#0000FF")
    wave.insert(0,y)
    translate(radius*2,0)
    line(x-radius*2,y,0,wave[0])
    
    stroke("#FF00ff")
    
    beginShape()
    for i in range(len(wave)):
        vertex(i,wave[i])
    endShape()
    
    stroke(0)

    
    
    
    
    
    
    
    
    
    tangle+=0.05
    
