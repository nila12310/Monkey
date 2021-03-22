          var bananas,obstacles,bananaimg,obstacleimg,score;
          var monkey,monkeyimg,invisibleground,ground,backgroundimg;
          function preload(){
            monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",                  "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
            "Monkey_09.png","Monkey_10.png");
            bananaimg=loadImage("banana.png");
            obstacleimg=loadImage("stone.png");
          backgroundimg=loadImage("jungle.jpg");
                        }
            function setup() {
            createCanvas(500,500);
          monkey=createSprite(50,350,10,10);
            monkey.addAnimation("monkey",monkeyimg);
            monkey.scale=0.1;
            ground = createSprite(200,180,400,20);
            ground.addImage("ground",backgroundimg);
            ground.x = ground.width/2;
            ground.velocityX =-3;
            ground.depth=monkey.depth;
            monkey.depth=monkey.depth+1;
            // console.log(monkey.y);
            invisibleground = createSprite(200,378,400,1);
            invisibleground.visible = false;
            score=0;   
            bananas=new Group();
            obstacles=new Group();
                }
          function draw() {
            background("pink");
            spawnbananas();
            spawnObstacles();
            monkey.collide(invisibleground);
            monkey.velocityY= monkey.velocityY + 0.9;
            if(keyDown("space")&& monkey.y>300){
            monkey.velocityY=-19;
                      }
              if(ground.x<0){
            ground.x=ground.width/2;
                  }
            if(obstacles.isTouching(monkey)){
            obstacles.scale=0.1;
                  }
            if(bananas.isTouching(monkey)){
            score=score+2;
            bananas.destroyEach();
                    }
            if(obstacles.isTouching(monkey)){
            score=0;
           obstacles.destroyEach();
                }
            drawSprites();
            textSize(23);
            fill("black");
            text("score:"+score,300,50);
                  }
          function spawnbananas() {
            //write code here to spawn the banana
            if (frameCount % 60 === 0) {
            var banana = createSprite(460,120,40,10);
            banana.y = Math.round(random(200,260));
            banana.addImage(bananaimg);
            banana.scale = 0.08;
            banana.velocityX = -6;
            //assign lifetime to the variable
            banana.lifetime = 134;
          //adjust the depth
          bananas.add(banana);
              }
                  }
            function spawnObstacles() {
            if(frameCount % 100=== 0) {
              var obstacle = createSprite(330,350,10,40);
            obstacle.velocityX = -6;
            obstacle.addImage(obstacleimg)
            obstacle.addImage(obstacleimg)
          //generate random obstacles
          // var rand = Math.round(random(1,6));
          //   switch(rand){
              //    case 1 : obstacle.addImage(obstacle1);
              //   break;
              //    case 2 : obstacle.addImage(obstacle2);
                //  break;
                  
                //   case 3 : obstacle.addImage(obstacle3);
                //  break;
                  
              //   case 4 : obstacle.addImage(obstacle4);
                //  break;
                  
              //    case 5 : obstacle.addImage(obstacle5);
                //  break;
                  
                //   case 6 : obstacle.addImage(obstacle6);
                //  break;
                          
              
              //assign scale and lifetime to the obstacle           
              obstacle.scale = 0.19;
              obstacle.lifetime = 140;
              
              obstacles.add(obstacle);
            }
          }