 var keys = {};
    var stage, sx, square, circle, sqx, sqy;

    function init() {
        stage = new createjs.Stage("canvas");
        square = new createjs.Shape();
        circle = new createjs.Shape();
        var endShape = new createjs.Shape();
        var show = stage.addChild(new createjs.Container());
        var ball1 = stage.addChild(new createjs.Container());
        var end = stage.addChild(new createjs.Container());

        /*
        function tick() {
            if (keys[37]) { // KEY_LEFT
              circle.x -= 80;
            }

            if (keys[38]){ 
              circle.y -= 80; //KEY_UP
            }

            if (keys[39]){ 
              circle.x += 80; //KEY_RIGHT
            }

            if (keys[40]){ 
              circle.y += 80;//KEY_DOWN
            }

            stage.update();
        }
        */
        var txt = new createjs.Text();
        txt.font = "bold 20px Dorsa";
        txt.color = "WHITE";
        txt.text = "END";
        txt.x = 740;
        txt.y = 710;
        stage.addChild(txt);
        stage.update();
        endShape.graphics.beginFill("black").drawRect(0, 0, 80, 80);
        end.addChild(endShape);
        ball1.x = -40;
        ball1.y = -80;
        end.x = 720;
        end.y = 680;
        show.x = -800;
        show.y = -760;
        var arr = [];
        var array = [];
        tempArr = [];
        /*var cirx = [];
        var ciry = [];*/
        var x = 0;
        // var color = ["DeepSkyBlue", "red", "pink", "red", "pink"]
        function ball(shape1) {

            shape1.x = 80;
            shape1.y = 80;
            shape1.graphics.beginLinearGradientFill(["red", "#D28B8B"], [0, 1], 0, 20, 0, 120).drawCircle(shape1.x, shape1.y, 40);

            ball1.addChild(shape1);
            //  createjs.Ticker.addEventListener("tick", tick);

            // createjs.Ticker.framerate =6;
            this.document.onkeydown = keydown;
            this.document.onkeyup = keyup;
        }
        ball(circle);

        function grid(shape) {
            shape.y = 0;
            for (var i = 0; i < 9; i++) {
                shape.y += 80;
                shape.x = 0;
                arr.push(shape.y);
                for (var x = 0; x < 10; x++) {
                    shape.x += 80;
                    arr.push(shape.x);
                    shape.graphics.beginStroke("black").drawRect(shape.x, shape.y, 80, 80);

                    if (x === (Math.floor(Math.random() * (8 - 1)) + 1) || i === (Math.floor(Math.random() * (8 - 1)) + 1)) {
                        shape.graphics.beginFill(createjs.Graphics.getHSL(Math.random() * 360, 100, 50));
                        // tempArr.push({rows: i, cols: x,sx: shape.x, sy: shape.y});
                        tempArr.push(shape.y);
                        array.push(shape.x);

                        //tempArr.push(shape.x);
                        //array.push(shape.y);
                        // array.push(shape);



                    } else {
                        shape.graphics.beginFill("white");
                    }
                    show.addChild(shape);
                    //console.log(shape.y);
                }

            }


            //array[Math.floor(Math.random() * (9 - 1)) + 1].graphics.beginFill("black");  

        }

        grid(square);



      //  console.log(circle.x);


        stage.update();
        // trail
        function keydown(event) {
            keys[event.keyCode] = true;

            if (keys[37]) { // KEY_LEFT
                circle.x -= 80;

            }

            if (keys[38]) {
                circle.y -= 80; //KEY_UP
            }

            if (keys[39]) {
                circle.x += 80; //KEY_RIGHT
            }

            if (keys[40]) {
                circle.y += 80; //KEY_DOWN
            }

            stage.update();
        }

        function keyup(event) {
            x++;
            delete keys[event.keyCode];

            document.getElementById('total').innerHTML = x;

            /* cirx.push(circle.x += circle.x);
   ciry.push(circle.y);
console.log(cirx);*/
            //var isCircleBlocked = false;
            for (var y = 0; y <= (tempArr.length); y++) {
                if ((array[y] + 80) === circle.x && tempArr[y] === circle.y) {
                    console.log("colored");
                    /*   console.log(array[y]);
                     console.log(circle.x);*/
                    alert("GAME OVER");
                    confirm("do you want to re-start ?");
                    window.location.reload();

                } else if (circle.x === 720 && circle.y === 720) {
                    alert("YOU WON WITH " + x + " STEPS");
                    location.reload();
                    break;
                } else {

                }
            }
        }



    }