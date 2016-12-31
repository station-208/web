
var containerx, stats;
var camera, scene, renderer, group, particle;
var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;



$(document).ready(function() {

	init();
	animate();
});

function init() {

				containerx = document.createElement( 'div' );
				document.body.appendChild( containerx );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 950, 1, 3000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				var PI2 = Math.PI * 2;
				var program = function ( context ) {

					context.beginPath();
					context.arc( 0, 0, 0.5, 0, PI2, true );
					context.fill();

				};

				group = new THREE.Group();
				scene.add( group );

				for ( var i = 0; i < 60; i++ ) {

					var material = new THREE.SpriteCanvasMaterial( {
						color: 0xff6f6f,
						program: program
					} );

					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2000 - 1000;
					particle.position.y = Math.random() * 2000 - 1000;
					particle.position.z = Math.random() * 2000 - 1000;
					particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
					group.add( particle );
				}

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth,950);
				containerx.appendChild( renderer.domElement );



			renderer.setClearColorHex( 0x000687, 1 );
				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / 950;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, 950);
}

			//


			//

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {

	camera.position.x += ( mouseX - camera.position.x ) * 0.05;
	camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
	camera.lookAt( scene.position );
	group.rotation.x += 0.01;
	group.rotation.y += 0.02;
	renderer.render( scene, camera );
}
