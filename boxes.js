

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };
  
  
// box function start  
    const createBoxes = function(count, canvasWidth, canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const colorArray = ['GoldenRod', 'GreenYellow', 'Maroon', 'OrangeRed', 'Coral','Chartreuse','DarkBlue','Red','Purple','Yellow','Green','Black','DarkCyan','LawnGreen','Lime','Navy','Teal'];
    const data  = []; 
        for(let i=0; i < count; i++) {
            data[i]={
                x: rand(canvas.width - 35),
                y: rand(canvas.height - 35),
                width: 35,
                height: 35,
                xDelta: rand(15),
                yDelta: rand(15),
                color: colorArray[rand(17) - 1],
                draw: function(){
                    context.fillStyle = this.color;
                    context.fillRect(this.x, this.y, this.width, this.height)
                },
                update: function(){
                    if(this.x + this.width >= canvas.width || this.x <=0){          
                        this.color = colorArray[rand(17) - 1];
                        this.xDelta *= -1;
                    };
                    if(this.y + this.height >= canvas.height || this.y <=0){
                        this.color = colorArray[rand(17) - 1];
                        this.yDelta *= -1;
                    };
                    this.x += this.xDelta;
                    this.y += this.yDelta;
          
          
                }  
            }; 
     

        };
             
    

//draw function part
    const draw = function() {
        context.fillStyle = 'Cornsilk';
        context.fillRect(0, 0, canvas.width, canvas.height);            
        for(let i = 0; i < count; i++) {
            data[i].draw()
        };
    };



//update function part
    const update = function() {
        for(let i = 0; i < count; i++) {
            data[i].update()
        };
    };
    


//loop function part    
    const loop = function(){
        draw();
        update();
        requestAnimationFrame(loop);  
    };
    
  loop();   
    
}; //box function end
       
    createBoxes(50,1517,730); 

