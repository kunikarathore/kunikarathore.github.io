
function init() {
    var stage = new createjs.Stage("demoCanvas");
    var stage2 = new createjs.Stage("demoCanvas2");
    var drag = stage.addChild(new createjs.Container());
    var box = stage.addChild(new createjs.Container());

    var show = stage2.addChild(new createjs.Container());
 
    // =-------------------
    var shape1 = new createjs.Shape();
    var shape2 = new createjs.Shape();
    var shape3 = new createjs.Shape();


    var test = new createjs.Shape();  
    var test1 = new createjs.Shape();
    var test2 = new createjs.Shape();


    shape1.graphics.beginFill("red").drawCircle(0, 0, 20);
    shape2.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 20);
    shape3.graphics.beginFill("pink").drawCircle(0, 0, 20);





    shape1.x = 50;
    shape1.y = 30;

    shape2.x = 100;
    shape2.y = 30;

    shape3.x = 150;
    shape3.y = 30;

    show.x = -150;
    show.y = -150;

    box.x =-150;
    box.y = -50;


    drag.addChild(shape1);
    drag.addChild(shape2);
    drag.addChild(shape3);

    var isShape1Dropped = false;
    shape1.on("pressmove", function(evt) {
        if (!isShape1Dropped) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            if (evt.target.x <= 110 && evt.target.y >= 190) {
                shape1.x = 250;
                shape1.y = 250;
                box.addChild(shape1);
                isShape1Dropped = true;
            }
            stage.update();
        }
    });

    var isShape2Dropped = false;
    shape2.on("pressmove", function(evt) {
        if (!isShape2Dropped) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            if (evt.target.x <= 60 && evt.target.y >= 190) {
                shape2.x = 200;
                shape2.y = 250;
                box.addChild(shape2);
                isShape2Dropped = true;
            }
            stage.update();
        }
    });
    var isShape3Dropped = false;
    shape3.on("pressmove", function(evt) {
        if (!isShape3Dropped) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            if (evt.target.x <= 170 && evt.target.y >= 190) {
                shape3.x = 300;
                shape3.y = 250;
                box.addChild(shape3);
                isShape3Dropped = true;
            }
            stage.update();
        }
    });
    // ---------output box --------
    var arr = [];
    var color = ["DeepSkyBlue", "red", "pink"]

    function coordinate(shape) {

        for (var i = 0; i < 3; i++) {

            shape.y += 50;
            arr.push(shape.y);
            // shape.y = 0;
            shape.x = 0;
            for (var x = 0; x < 3; x++) {
                shape.x += 50;
                arr.push(shape.x);
                shape.graphics.beginFill("black").drawRect(shape.x - 20, shape.y - 20, 40, 40);
                shape.graphics.beginFill(color[x]).drawCircle(shape.x, shape.y, 20);

                show.addChild(shape);
            }
        }


    }

    // game box

    function boxball(ball) {

        for (var i = 0; i < 2; i++) {

            ball.y += 50;
            arr.push(ball.y);
            // shape.y = 0;
            ball.x = 0;
            for (var x = 0; x < 3; x++) {
                ball.x += 50;
                arr.push(ball.x);
                ball.graphics.beginFill("black").drawRect(ball.x - 20, ball.y - 20, 40, 40);
                ball.graphics.beginFill(color[x]).drawCircle(ball.x, ball.y, 20);

                box.addChild(ball);
            }
        }


    }
    // draggable balls

    function dboxball(dball) {

        for (var i = 0; i < 2; i++) {

            dball.y += 50;
            arr.push(dball.y);
            // shape.y = 0;
            dball.x = 0;
            for (var x = 0; x < 3; x++) {
                dball.x += 50;
                arr.push(dball.x);
                dball.graphics.beginFill("black").drawRect(dball.x - 20, ball.y - 20, 40, 40);
                dball.graphics.beginFill(color[x]).drawCircle(dball.x, ball.y, 20);

                box.addChild(dball);
            }
        }


    }

    // game box (square)-----------------
       function boxsquare(square) {

        for (var i = 0; i < 1; i++) {

            //square.y == 150;
            arr.push(square.y);
            // shape.y = 0;
           square.x = -10;
            for (var x = 0; x < 3; x++) {
                square.x += 50;
                arr.push(square.x);
                square.graphics.beginFill("black").drawRect(square.x, 230, 40, 40);
               

                box.addChild(square);
            }
        }


    }

    // ======== ********==============================

 
  
    boxball(test2);
    boxsquare(test1);
   coordinate(test);

    createjs.Ticker.on("tick", tick);

    function tick(evt) { // 120 >=shape1.x >= 90 &&  60 >=shape2.x >= 30 &&  170 >=shape3.x >= 150

        if (shape1.y > 190 && shape2.y > 190 && shape3.y > 190 && shape1.x >= 90 && shape2.x >= 60 && shape3.x >= 150) {
            shape1.alpha = shape2.alpha = shape3.alpha = 0.6;


            stage.update();

        }
else{
        shape1.alpha = shape2.alpha = shape3.alpha = 1;

    }
  }

    stage.update();
    stage2.update();
}