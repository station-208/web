


w=300;
h=300;
var yoff = 0.0;        // 2nd dimension of perlin noise
var x;
var sc;
var xt;
var sp=[10]; 
var l= [10]; 
var aa;
var r= [10]; 
function setup() {
         background(0, 6, 135);
    
    aa=0;
    x=0;
    for(var i=0;i<10;i++){
        
    
      l[i]=random(20,110);    
    r[i]=random(20,30); sp[i]=random(-0.03,0.03);  }
  
    var myCanvas =  createCanvas(w,h);
    myCanvas.parent("topbox");
    
  sc=30;
                             
                                 for(var i=0;i<10;i++){
      l[i]=random(20,130);    
    r[i]=random(20,30); sp[i]=random(-0.015,0.015);  }
  
                             
                             

}

function draw() {

  var myCanvas =  createCanvas(w,h);
 
    myCanvas.parent("topbox");
    noStroke();
      background(0, 6, 135);
    fill(3,0,63); 

    for(var i=0;i<10;i++){
      r[i]+=sp[i];
        ellipse(w/2+l[i]*cos(r[i]),h/2+l[i]*sin(r[i]),sc,sc);
        
       
    }
    
     for(var i=0;i<9;i++){
    strokeWeight(7);
        stroke(3,0,63); line(w/2+l[i]*cos(r[i]),h/2+l[i]*sin(r[i]),w/2+l[i+1]*cos(r[i+1]),h/2+l[i+1]*sin(r[i+1]));
     
     }
      noStroke();
    
       
       fill(250,0,132);

    for(var i=0;i<10;i++){

        ellipse(w/2+l[i]*cos(r[i])-10,h/2+l[i]*sin(r[i]),sc,sc);
   
    }

     

}