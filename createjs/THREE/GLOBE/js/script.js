 // scene or view -  field of view
			var scene = new THREE.Scene();

		  // camera -  aspect ratio
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

		  // Renderer - uses to display the scene to us
			var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

          /* 
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          ======== torus - shape =========
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          */
     
     var light = new THREE.DirectionalLight( 0xffffff );
   light.position.set( 1, 1, 1 ).normalize();
    scene.add(light);

		  //x, y, z value of shape 
		    var geometry = new THREE.SphereGeometry(7, 66, 30 );

		     // SHAPE WITH IMAGE
          var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('GLOBE.jpg') } );
        // var material = new THREE.MeshLambertMaterial({
            //map:THREE.ImageUtils.loadTexture('cloud2.jpg')
       // });

          // shape with axis and color added 
            var cube = new THREE.Mesh( geometry, material );

          // adding shape to scene
            scene.add(cube);
          
          // for or near - decrease z it will become nearer
            camera.position.z = 20;

           

             //mesh.rotation.y = THREE.Math.degToRad(45); ---------------note for degree rotation

          //render loop to actualy render everything to our screen
            function render() {
	        requestAnimationFrame( render );
          // rotation for shape
              //cube.rotation.x += 0.1;
              console.log(cube.position.x);
              

            renderer.render( scene, camera );

            }

            render();
           
           /*
           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
           ====== mouse movement ========
           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
           */

          var mouse = new THREE.Vector2();
           
           // function to track the presence of mouse
          function onMouseMove( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            // x and y of mouse
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;   
            
            // if for rotation of mouse 

            //var for speed 
            var SPEED = 0.07;
            

            if(mouse.y < 0 && ( mouse.x < 0 || mouse.x > 0)){
             cube.rotation.x += SPEED *   0.5;
            }
            else if(mouse.y > 0 && (mouse.x > 0 || mouse.x < 0)){
             cube.rotation.x += SPEED * -0.5;
            }
            else{
             cube.rotation.x = 0;
            }

          /*
          if(mouse.y > 0){
             cube.rotation.y = 0.3;
            }
            else if(mouse.y < 0){
             cube.rotation.y = -0.3;
            }
            else{
             cube.rotation.x = 0;
            }*/

          }
          //event listener for mouse movement
          window.addEventListener( 'mousemove', onMouseMove, false );
       
        // ============= LEARN THROUGH THESE WEBSITE ===================

// https://aerotwist.com/tutorials/getting-started-with-three-js/
// http://davidscottlyons.com/threejs/presentations/frontporch14/#slide-48 
// http://threejs.org/docs/api/core/Raycaster.html