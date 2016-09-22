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
          ======== torus - shape ==========
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          */

		  //x, y, z value of shape 
		    var geometry = new THREE.TorusGeometry( 6, -2, 8 );

		  // color of the shape
            var material = new THREE.MeshNormalMaterial({ wireframe: true});
            

          // shape with axis and color added 
            var cube = new THREE.Mesh( geometry, material );

          // adding shape to scene
            scene.add(cube);
          
          // for or near - decrease z it will become nearer
            camera.position.z = 20;

          //render loop to actualy render everything to our screen
            function render() {
	        requestAnimationFrame( render );
          // rotation for shape
              cube.rotation.x += 0.1;
            renderer.render( scene, camera );
            }
            render();
