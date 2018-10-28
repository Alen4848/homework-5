
    const canvas = document.getElementById('mario');
    const context = canvas.getContext('2d');

    canvas.width = 1517;
    canvas.height = 730;
    
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };

 
 const background = new Image();
  background.src = "https://art.pixilart.com/18b140ee5ae7053.png";
  
  const mario = new Image();
  mario.src = "http://www.iconarchive.com/download/i27092/ph03nyx/super-mario/Retro-Mario.ico";
  
  const mushroom = new Image();
  mushroom.src = 'http://www.hardcoregamersnicaragua.com/wp-content/uploads/2018/02/Z1111111111111111111.gif'

  const turtle = new Image();
  turtle.src = 'https://orig00.deviantart.net/4ee2/f/2012/159/8/d/red_paratroopa_by_yoshigo99-d52saez.png';
  

  const gameData = {
    hero: {
          x:0,
          y:468,
          //speed:10,
          xDelta:0,
          yDelta:0,
          width:100,
          height:100,
          image: mario,
          draw: function(){
              context.drawImage(this.image, this.x, this.y, this.width, this.height);
          },
          update: function(){                
                this.x += this.xDelta;
                this.y += this.yDelta;

               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
          }
      },
               
     
     
       badGuys: [
        {  
                x: rand(canvas.width - 50),
                y: rand(canvas.height - 50),
                xDelta: 3,
                yDelta: 3,
                width: 50,
                height:   50,
                image: mushroom,
                draw: function(){
                    context.drawImage(this.image,this.x,this.y,this.width,this.height)
                },
                update: function(){
                    this.x += this.xDelta; 
                    this.y += this.yDelta;
                    if(this.x + this.width >= canvas.width || this.x <= 0){
                        this.xDelta = this.xDelta * -1;
                    }

                    if(this.xDelta === 0){
                        this.xDelta = 1; 
                    }

                    if(this.y + this.height >= canvas.height || this.y <= 0){
                        this.yDelta = this.yDelta * -1;
                    }

                    if(this.yDelta === 0){
                        this.yDelta = 1; 
                    }
            }
            
        },//mushroom
          
   {
                x: rand(canvas.width - 50),
                y: rand(canvas.height - 50),
                xDelta: rand((10)*-1),
                yDelta: 3,
                width: 50,
                height: 50,
                image: turtle,
                draw: function(){
                context.drawImage(this.image,this.x,this.y,this.width,this.height)
              },
              update: function(){
                  this.x += this.xDelta 
                  this.y += this.yDelta
                  if(this.x + this.width >= canvas.width || this.x <= 0){
                        this.xDelta = this.xDelta * -1;
                    }

                    if(this.xDelta === 0){
                        this.xDelta = 1; 
                    }

                    if(this.y + this.height >= canvas.height || this.y <= 0){
                        this.yDelta = this.yDelta * -1;
                    }

                    if(this.yDelta === 0){
                        this.yDelta = 1; 
                    }
              }

        }// end of turtle

    ]
  } // end of game data



    const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event) {
	    if(event.keyCode === upKey) {
        gameData.hero.yDelta = -3;
        }
        if(event.keyCode === downKey){
            gameData. hero.yDelta = 3;
        }
        if(event.keyCode === rightKey){
            gameData.hero.xDelta = 3;
        }
        if(event.keyCode === leftKey){
            gameData.hero.xDelta = -3;
        }
    }, false);
    document.addEventListener('keyup', function(event) {
                    if(event.keyCode === rightKey){ 
                        gameData.hero.xDelta = 0;
                    }if(event.keyCode === leftKey){
                        gameData.hero.xDelta = 0;
                    }if(event.keyCode === downKey){
                        gameData.hero.yDelta = 0;
                    }if( event.keyCode === upKey){
                        gameData.hero.yDelta = 0;
                    }               
                }, false);




  const draw = function(){  
        context.drawImage(background,0,0,canvas.width,canvas.height); 
        gameData.hero.draw();
  };


  const update = function(){
        gameData.hero.update();

  };




function badGuyDU(){
    for(let i = 0; i < gameData.badGuys.length; i++){
        gameData.badGuys[i].draw();
        gameData.badGuys[i].update();
    }
}

function ifIntersectied() {
    let i = 0;
    while(i < gameData.badGuys.length){
    if (gameData.hero.x < gameData.badGuys[i].x + gameData.badGuys[i].width &&
        gameData.hero.x + gameData.hero.width > gameData.badGuys[i].x &&
        gameData.hero.y < gameData.badGuys[i].y + gameData.badGuys[i].height &&
        gameData.hero.y + gameData.hero.height > gameData.badGuys[i].y) {
            alert('game.over');
        }
        i++
    }
}









  const loop = function(){

      draw();
      update();
      badGuyDU();
      ifIntersectied();
      requestAnimationFrame(loop);
  }

  loop();

  







