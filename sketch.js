const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    var canvas = createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    ground1 = new Platform(600, 495, 1200, 10);

    base1 = new Platform(505, 400, 270, 10);
    base2 = new Platform(850, 175, 265, 10);

    //6th Layer For Base 1 (6 boxex)
    box1 = new Box(405, 375, 40, 40);
    box2 = new Box(445, 375, 40, 40);
    box3 = new Box(485, 375, 40, 40);
    box4 = new Box(525, 375, 40, 40);
    box5 = new Box(565, 375, 40, 40);
    box6 = new Box(605, 375, 40, 40);

    //5th Layer For Base 1 (5 boxex)
    box7 = new Box(425, 334, 40, 40);
    box8 = new Box(465, 334, 40, 40);
    box9 = new Box(505, 334, 40, 40);
    box10 = new Box(545, 334, 40, 40);
    box11 = new Box(585, 334, 40, 40);

    //4th Layer For Base 1 (4 Boxes)
    box12 = new Box(445, 100, 40, 40);
    box13 = new Box(485, 293, 40, 40);
    box14 = new Box(525, 293, 40, 40);
    box15 = new Box(565, 293, 40, 40);

    //Test = new Box(100, 400, 40,40);
    //string = new SlingShot(this.Test,{x:200, y:400});

}

function draw() {
    background(240, 255, 240);

    Engine.update(engine);

    ground1.display();

    base1.display();
    base2.display();

    //6th Layer For Base 1 (6 boxex)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    //5th Layer For Base 1 (5 boxex)
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    //4th Layer For Base 1 (4 Boxes)
    box12.display();
    box13.display();
    box14.display();
    box15.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.Test, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32)
    {
        slingshot.attach(bird.body);
    }
}*/
