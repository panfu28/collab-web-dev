/**
 * @typedef  {Object}  VideoEmbed represents a video.
 * @property {string}  name name displayed in show/hide button
 * @property {string}  html html displayed in 3D
 */

/**
* Produces html for a youtube embed
* @param   {string} name to attach to the show/hide button
* @param   {string} url the /embed/ url of the video you wish to embed
* @returns {VideoEmbed} youtube embed
*/

/**
 * Hall of videos
 * @type {VideoEmbed[]}
 */



/*
objectList contains objects in the form of:

{
    element   HTMLElement      // Element to use in place of html.
    html:     string           // html to assign to object
    rotation: vector3          // rotation of object in radians
    position: vector3          // position of object
    sprite:   bool             // display the html as a sprite, always face the camera
    animate:  function(delta)  // function called on every frame draw. Delta is the time since the last frame
                               // refer to this.object to change the position or rotation of the CSS object

    object: THREE.CSSObject || CSSSprite // will be assigned after createObjects() is called
}

Animation example:
    animate: function (delta) { this.object.rotation.z += 0.0005 * delta }
*/
// Add 3D elements here
var objectList = [
    { // Thinkpad
        html: `<img src="img/thinkpad_keyboard.png">`,
        rotation: { x: -Math.PI / 2, y: 0, z: 0 },
        position: { x: 0, y: -1000, z: 1000 },
    },
    { // Character
        html: `<img src="img/character.png">`,
        sprite: true,
        hoverCounter: 0,
        animate: function (delta) {
            this.object.position.x = controls.target.x;
            this.object.position.y = controls.target.y - 500;
            this.object.position.z = controls.target.z;
            this.object.position.y += Math.sin(this.hoverCounter / 30) * 30;
            this.hoverCounter += delta * 0.05;
            this.hoverCounter %= 30 * Math.PI * 2;
        },
        style: {
            pointerEvents: "none"
        }
    },
    
    { // Container
        element: ".container",
    }
]


var scene, camera, renderer;
var controls;
var objects = {};
var velocity = {
    x: 0,
    y: 0,
    z: 0,
}
var direction = {
    forward: false,
    backward: false,
    left: false,
    right: false,
}

var movespeed = 0.05;
var friction = 0.005;
var sprinting = false;
var sprintMultiplier = 3;


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(149, 339, 1187);
    camera.lookAt(new THREE.Vector3());

    createObjects();
    	//skybox
 var sides = [
          {
            url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/328/161/576.gif',
            position: [ -4096, 0, 0 ],
            rotation: [ 0, Math.PI / 2, 0 ]
          },
          {
            url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/328/161/576.gif',
            position: [ 4096, 0, 0 ],
            rotation: [ 0, -Math.PI / 2, 0 ]
          },
          {
            url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/328/161/576.gif',
            position: [ 0, 0,  4096 ],
            rotation: [ 0, Math.PI, 0 ]
          },
          {
            url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/328/161/576.gif',
            position: [ 0, 0, -4096 ],
            rotation: [ 0, 0, 0 ]
          }
        ];
	
	
	for ( var i = 0; i < sides.length; i ++ ) {
					var side = sides[ i ];
					var element = document.createElement( 'img' );
					element.width = 10000; // 2 pixels extra to close the gap.
					element.src = side.url;
					var object = new THREE.CSS3DObject( element );
					object.position.fromArray( side.position );
					object.rotation.fromArray( side.rotation );
					scene.add( object );
				}
    

    window.addEventListener("resize", onResize);
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("renderer").appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // controls.keys.UP = 87;
    // controls.keys.BOTTOM = 83;
    // controls.keys.LEFT = 65;
    // controls.keys.RIGHT = 68;
    // controls.keyPanSpeed = 20;

    controls.target.x = 21;
    controls.target.z = 467;

    document.body.addEventListener("keydown", onKeydown);
    document.body.addEventListener("keyup", onKeyup);

    // Defocus anything that was focused so movement controls works
    // definitely not a hack
    setInterval(blurAll, 500);
    // setInterval(saturateBackground, 1000);
}

function blurAll() {
    var inpt = document.createElement("input");
    document.body.appendChild(inpt);
    inpt.focus();
    document.body.removeChild(inpt);
}

var background = document.getElementById("background");
function saturateBackground() {
    var distance = Math.sqrt((controls.target.x * controls.target.x) + (controls.target.z * controls.target.z));
    distance = Math.round(distance / 10000 * 10) / 10 + 1;
    background.style.filter = "saturate(" + distance + ") blur(5px)";
}


function onKeydown(e) {
    switch (e.keyCode) {
        case 87: // W
            direction.forward = true;
            break;
        case 83: // S
            direction.backward = true;
            break;
        case 65: // A
            direction.left = true;
            break;
        case 68: // D
            direction.right = true;
            break;
        case 16:
            sprinting = true;
            break;
    }

    var key = konamiCodeKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            showEasterEgg();
            konamiCodePosition = 0;
            var trophy = new Audio("audio/trophy.mp3");
            trophy.play();
        }
    } else {
        konamiCodePosition = 0;
    }
}

function onKeyup(e) {
    switch (e.keyCode) {
        case 87: // W
            direction.forward = false;
            break;
        case 83: // S
            direction.backward = false;
            break;
        case 65: // A
            direction.left = false;
            break;
        case 68: // D
            direction.right = false;
            break;
        case 16:
            sprinting = false;
            break;
    }
}


function createObjects() {
    for (var i = 0; i < objectList.length; i++) {
         /** @type {HTMLElement} */
        var div;

        if (objectList[i].element) {
            div = document.body.querySelector(objectList[i].element);
            document.body.removeChild(div);
        } else {
            div = document.createElement("div");
            div.innerHTML = objectList[i].html;
        }

        var tmpel;
        if (objectList[i].sprite) {
            tmpel = new THREE.CSS3DSprite(div);
        } else {
            tmpel = new THREE.CSS3DObject(div);
        }

        if (objectList[i].style) {
            Object.keys(objectList[i].style).forEach(x => {
                div.style[x] = objectList[i].style[x];
            });
        }

        objectList[i].position = objectList[i].position || {x: 0, y: 0, z: 0};
        objectList[i].rotation = objectList[i].rotation || {x: 0, y: 0, z: 0};

        tmpel.position.x = objectList[i].position.x;
        tmpel.position.y = objectList[i].position.y;
        tmpel.position.z = objectList[i].position.z;

        tmpel.rotation.x = objectList[i].rotation.x;
        tmpel.rotation.y = objectList[i].rotation.y;
        tmpel.rotation.z = objectList[i].rotation.z;

        objectList[i].object = tmpel;
        scene.add(tmpel);
    }
}

var hoverCounter = 0;
var prevTime = performance.now();
function animate() {
    requestAnimationFrame(animate);

    var time = performance.now();
    var delta = (time - prevTime);

    // Movement
    var dir = new THREE.Vector3();
    dir.z = Number(direction.forward) - Number(direction.backward);
    dir.x = Number(direction.left) - Number(direction.right);
    dir.normalize();

    velocity.x -= velocity.x * friction * delta;
    velocity.z -= velocity.z * friction * delta;

    var speed = movespeed;
    if (sprinting) {
        speed *= sprintMultiplier;
    }

    if (direction.forward || direction.backward) {
        velocity.z -= dir.z * speed * delta;
    }

    if (direction.left || direction.right) {
        velocity.x -= dir.x * speed * delta;
    }

    controls.pan(-velocity.x, -velocity.z);

    controls.update();
    renderer.render(scene, camera);

    prevTime = time;

    // Execute object animations
    objectList.forEach(x => {
        if (x.animate) x.animate(delta);
    });
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();

BoxCV = new BoxCanvas('#box-cv');
BoxCV.RegisterEvent(document.getElementById('box-cv-clear'), 'click', BoxCV.Event_Clear);
BoxCV.RegisterEvent(document.getElementById('box-cv-toggleCursor'), 'click', BoxCV.Event_ToggleCursor);
BoxCV.RegisterEvent(document.getElementById('box-cv-undo'), 'click', BoxCV.Event_Undo);
