const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let timer = 0
var engine,world;
var gameState = "story";
var agent
var bcgImg,story,start,bcgImg1,yehImg
var textInputBox,goButton,textInputBox1,textInputBox2,textInputBox3,textInputBox4,textInputBox5
var level,title,level3Element,level3Bcg
var happyAgent,agentImg1,agent1,agent2;
var level2,level2Img,hitman,level3,levelPartImg

function preload(){
bcgImg = loadImage("images/background.jpeg")
startImg = loadImage("images/start.jpeg")
bcgImg1 = loadImage("images/background1.jpeg")
agentImg = loadImage("images/agentImg.png")
happyAgent = loadImage("images/agent happy.jpg")
yehImg = loadImage("images/yehImage.jpg")
level2Img = loadImage("images/level2Image.jpg")
agentImg1 = loadImage("images/agent level 2_burned.png")
hitman = loadImage("images/hitman image_burned.png")
levelPartImg = loadImage("images/level 2 part.png")
level3Bcg = loadImage("images/level3bcg.jpg")
}

function setup() {
  createCanvas(800,600);
  start = createSprite(700,50,70,30)
  start.addImage("img1",startImg)
  textInputBox = createInput("")
  textInputBox1 = createInput("")
  textInputBox2 = createInput("")
  textInputBox3 = createInput("")
  textInputBox4 = createInput("")
  textInputBox5 = createInput("")
  goButton = createButton("go")
  level2 = createButton("Level 2")
  title = createElement('h2')
  level3Element = createElement('h2')
  level3 = createButton("Level 3")
  agent = createSprite(50,450,30,100);
     agent.addImage("img2",agentImg)
     agent.visible = false
      agent1 = createSprite(50,450,30,100)
     agent1.addImage("img3",agentImg1)
     agent1.visible = false
     agent1.scale = 0.7;
     agent2 = createSprite(50,450,30,100)
     agent2.addImage("img3",hitman)
     agent2.visible = false
     agent2.scale = 0.5;
}

function draw() {
  
  
    background(bcgImg);
    textInputBox1.hide();
    textInputBox.hide();
    textInputBox2.hide();
    textInputBox3.hide();
    textInputBox4.hide();
    textInputBox5.hide();
    goButton.hide();
    level2.hide();
   level3.hide();

   if(mousePressedOver(start)){
    gameState = "Play"
    start.destroy();
    
  }

   if(gameState === "Play"){
    agent.visible = true;
    background(bcgImg1);
    textSize(15)
    text("HINT: IT IS A STATE OF INDIA",500,350)
    fill("red")
    textSize(40);
     text("hnratsjaa",300,300)
     
     textInputBox.show();
     textInputBox.position(300,400)
     goButton.show();
     goButton.position(350,450)
     goButton.mousePressed(function(){       
       
       if(textInputBox.value() === "rajasthan"){
        goButton.hide();
        gameState = "level1Completed"
        
        console.log("true")
       textInputBox.hide();
       agent.visible = false;
     }
       
       
     })
     
  }

  if(gameState === "level1Completed"){
    background(yehImg)
    level2.show();
    level2.position(700,550);
    
    level2.mousePressed(function(){
      gameState = "level2"
    })
  }



  if(gameState === "level2"){
    background(level2Img)
    agent1.visible = true
    fill("yellow")
    textSize(25);
    text("Now you are doing well so now  you have to complete a quiz",100,50)
    fill("blue")
    textSize(30)
    text("When we celebrate National Army Day",150,300)
    title.html("level 2")
    title.position(50,50)
    textInputBox1.show();
    textInputBox1.position(300,400)
    goButton.show();
    goButton.mousePressed(function(){       
    
      if(textInputBox1.value() === "15 january"){
       goButton.hide();
      
       gameState = "part2"
       console.log("true")
      textInputBox1.hide();
      agent1.visible = false
    }
      
      
    })
  }

  if(gameState === "part2"){
    background("orange")
    agent2.visible = true;
    fill("red")
     textSize(25);
     text("YES,YOU ARE CORRECT NOW THERE IS A PART 2 ALSO ",100,50)
     fill("purple")
     textSize(30)
     text("In which year National Army Day established",150,300)
     textInputBox2.show();
     textInputBox2.position(300,400)
     goButton.show();
     goButton.mousePressed(function(){       
     
       if(textInputBox2.value() === "1895"){
        goButton.hide();
       title.hide();
        gameState = "level2Completed"
     
       textInputBox2.hide();
 
       }
     })
   }
 

  if(gameState === "level2Completed"){
  background(yehImg)
  agent2.visible = false;
  level3.show();
  level3.position(700,550);
    
    level3.mousePressed(function(){
      gameState = "level3"
    })
  }

  if(gameState === "level3"){
     background("blue")
     level3Element.html("level 3")
    level3Element.position(50,50)
     fill("yellow")
     textSize(30)
     text("NOW YOU HAVE TO FIND THE MISSING LETTERS",50,50)
     fill("green")
     textSize(30)
     text("Headquarter of Northern Command of Indian Army",100,300)
     fill("green")
     textSize(30)
     text("UD  AM  U ",250,350)
     textInputBox3.show();
     textInputBox3.position(300,400)
     goButton.show();
     goButton.mousePressed(function(){       
     
       if(textInputBox3.value() === "hpr"){
        goButton.hide();
       
        gameState = "level3Part"
     
       textInputBox3.hide();
 
       }
     })
  }

  if(gameState === "level3Part"){
    background(level3Bcg)
    textSize(20)
    text("YES YOU ARE DOING WELL ",100,50)
    textSize(30)
    text("Smallest unit of Indian Army called",100,300)
    textSize(30)
    text("S  CT  ON",250,350)
    textInputBox4.show();
     textInputBox4.position(300,400)
     goButton.show();
     goButton.mousePressed(function(){       
     
       if(textInputBox4.value() === "ei"){
        goButton.hide();
       
        gameState = "level3Part1"
     
       textInputBox4.hide();
 
       }
     })
  }
  
    if(gameState === "level3Part1"){
       background("orange")
       textSize(20)
       text("NOW YOU ARE ON GOOD POST",100,50)
       textSize(30)
       text("Who is the present Chief of Indian Army",100,300)
       textSize(30)
       text("B  P  N   R  W  T",250,350)
       textInputBox5.show();
     textInputBox5.position(300,400)
     goButton.show();
     goButton.mousePressed(function(){       
     
       if(textInputBox5.value() === "iiaa"){
        goButton.hide();
       
        gameState = "level3Completed"
     
       textInputBox4.hide();
 
       }
     })
    }

if(gameState === "level3Completed"){
background(yehImg)
}
  
  

  drawSprites();

}