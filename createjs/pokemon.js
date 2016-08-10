var stage, tomato, bg, tom, fallTom, cutout, pikachu, fallx;
var keys = {};
var fall = [];
var soundID = "bounce";


function init() {
    // =================== STAGE ==========================
    stage = new createjs.Stage("myCanvas");

    // ================== sound ===========================
    createjs.Sound.registerSound("Toing.ogg", soundID);

    // ===========adding a background =====================
    var image1 = new Image();
    image1.src = "background1.png";
    image1.onload = handleBgLoad;

    function handleBgLoad(event) {
        var image1 = event.target;
        var bitmap1 = new createjs.Bitmap(image1);
        bg.addChild(bitmap1);


        stage.update();
    }

    // ===========Container FOR tomato ====================
    tomato = new createjs.Container();

    // ===========Container FOR bg ====================
    bg = new createjs.Container();

    // ===========Container FOR static tomato ====================
    tom = new createjs.Container();

    // ===========Container FOR static pika ====================
    fallTom = new createjs.Container();
    fallx = 245;
    
    fallTom.y = 357;
    fallTom.scaleX = fallTom.scaleY = 0.5;
    // ===========Container FOR cutout ====================
    cutout = new createjs.Container();




    // ===========adding image of tomato ==================
    var image = new Image();
    image.src = "tomato.png";
    image.onload = handleImageLoad;

    function handleImageLoad(event) {
        var image = event.target;
        var bitmap = new createjs.Bitmap(image);
        tomato.addChild(bitmap);
        tomato.x = 225;
        tomato.y = 450;
        tomato.scaleX = tomato.scaleY = 1;

        stage.update();
    }

    // ===========adding image of cutout ==================
    var image4 = new Image();
    image4.src = "cutout.png";
    image4.onload = handleCutoutLoad;

    function handleCutoutLoad(event) {
        var image4 = event.target;
        var bitmap4 = new createjs.Bitmap(image4);
        cutout.addChild(bitmap4);


        stage.update();
    }

    // ===========sprite of pikachu ========================
    var data = new createjs.SpriteSheet({
        "images": ["pika_sprite.png"],
        "frames": { "regX": 0, "height": 500, "count": 10, "regY": 0, "width": 500 },
        "animations": {
            "eat": 1,
            "stop": [1, 0]
        }
    });
    pikachu = new createjs.Sprite(data);


    // ===========adding image of static tomato ==================
    var image2 = new Image();
    image2.src = "tomato.png";
    image2.onload = handleTomatoLoad;

    function handleTomatoLoad(event) {
        var image2 = event.target;
        var bitmap2 = new createjs.Bitmap(image2);
        tom.addChild(bitmap2);
        tom.x = 225;
        tom.y = 500;
        tom.scaleX = tom.scaleY = 0.5;

        stage.update();
    }

    // ===========adding image of pikachu ==================
    var image3 = new Image();
    image3.src = "tomato.png";
    image3.onload = handlePikaLoad;

    function handlePikaLoad(event) {
        var image3 = event.target;
        var bitmap3 = new createjs.Bitmap(image3);
        fallTom.addChild(bitmap3);

        stage.update();
    }

    //============= on press of space bar ==================
    this.document.onkeydown = keydown;
    this.document.onkeyup = keyup;
    //====================================================

    stage.addChild(bg);
    stage.addChild(tom);
    
    stage.addChild(pikachu);
    stage.addChild(tomato);
    stage.addChild(cutout);
    cutout.visible = false;

    //============================== movement of pikachu =================================

                 function run(){
                    createjs.Tween.get(pikachu).to({
                    x: 100,
                    y: 0
                }, 2000)
                 .to({
                    x: -100,
                    y: 0
                }, 2000).call(run);
                 }
                     createjs.Tween.get(pikachu).to({
                    x: 100,
                    y: 0
                }, 2000)
                 .to({
                    x: -100,
                    y: 0
                }, 2000).call(run);

    stage.setChildIndex(tomato, stage.getNumChildren() + 1000);

    // function to close the mouth of pikachu
     function stop() {
        pikachu.gotoAndPlay("stop");
        cutout.visible = true;
        cutout.alpha = 1;

        //================ tween for cutout ==================================================
        createjs.Tween.get(cutout).wait(1000).to({
            alpha: 0
        }, 1000);

    }

    function stop2() {
        pikachu.gotoAndPlay("stop");
        //stage.addChild(fallTom);
        fallTom.x = fallx;
        
        

    }
    var x = 0;
    var txt = new createjs.Text();
        txt.font = "bold 40px Dorsa";
        txt.color = "black";
        txt.x = 450;
        txt.y = 30;
        stage.addChild(txt);
    

    //====================================================================================
    // =============== function called after pressing of space bar =======================
    //====================================================================================
    function keydown(event) {
        keys[event.keyCode] = true;

        if (keys[32]) {


            playSound();

            // ================= calling pikachu sprite to open mouth  =========================
            pikachu.gotoAndPlay("eat");

            createjs.Tween.get(tom).to({
                    x: 225,
                    y: 500,
                    scaleX: 0.5,
                    scaleY: 0.5
                })
                .to({
                    x: 225,
                    y: 450,
                    scaleX: 1,
                    scaleY: 1
                }, 1000);

            //=================== Tween for tomato (movement) ===================================

            if((pikachu.x < -90 && pikachu.x > -120) || (pikachu.x > 80 && pikachu.x < 120) ){
                createjs.Tween.get(tomato).to({
                    x: 225,
                    y: 450,
                    scaleX: 1,
                    scaleY: 1
                }).to({
                    x: 210,
                    y: 180,
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 500, createjs.Ease.quadOut)
                .to({
                    x: 245,
                    y: 275,
                    scaleX: 0,
                    scaleY: 0
                }, 500, createjs.Ease.quadOut).call(stop); // stop function to close the mouth of the pokemon
                // adding no. of tomatoes eaten 
                 x++;
                 txt.text = x;
              //  document.getElementById('total').innerHTML = x;
        
    } else{
         createjs.Tween.get(tomato).to({
                    x: 225,
                    y: 450,
                    scaleX: 1,
                    scaleY: 1
                }).to({
                    x: 210,
                    y: 180,
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 500, createjs.Ease.quadOut)
                .to({
                    x: 245,
                    y: 255,
                    scaleX: 0.5,
                    scaleY: 0.5
                }, 500, createjs.Ease.quadOut)
                .to({
                    x: fallx,
                    y: 355,
                    scaleX: 0.5,
                    scaleY: 0.5
                }, 500, createjs.Ease.quadOut).call(stop2); // stop function to close the mouth of the pokemon
                
                

    }



            createjs.Ticker.setFPS(60);
            createjs.Ticker.addEventListener("tick", stage);

        }


        stage.update();
    }

    function keyup(event) {

        delete keys[event.keyCode];
    }
createjs.Ticker.setFPS(60);
            createjs.Ticker.addEventListener("tick", stage);
}

function playSound() {
    createjs.Sound.play(soundID);
}


