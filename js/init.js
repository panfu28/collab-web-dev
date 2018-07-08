var musicplayer;
window.addEventListener("load", function () {
    musicplayer = new Audio("audio/africa.mp3");
    musicplayer.play()
        .then(function () {
            document.getElementById("africa-player").src = "img/toto-africa.jpg";
        }).catch(function () {
            console.log("Could not play audio, blame chrome");
        })
    var afplayer = document.getElementById("africa-player");
    afplayer.addEventListener("click", function () {
        if (!musicplayer.paused) {
            musicplayer.pause();
            afplayer.src = "img/toto-africa-play.png";
        } else {
            musicplayer.play();
            afplayer.src = "img/toto-africa.jpg";
        }
    });
});

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
function ytEmbed(name, url) { return { name: name, html: `<iframe width="854" height="480" src="` + url + `"frameborder="0" allow="autoplay; encrypted-media"></iframe>` } }

/**
 * Hall of videos
 * @type {VideoEmbed[]}
 */
var hallOfVideos = [
    ytEmbed("ImPretentious.shr", "https://www.youtube.com/embed/0v_p28uti2A"),
    ytEmbed("24/7 lofi hip hop radio - beats to chill/study/relax", "https://www.youtube.com/embed/WAxY4wfN2C0"),
    ytEmbed("【東方】趣を感じる東方アレンジメドレー【作業・睡眠用BGM", "https://www.youtube.com/embed/rdVoPW9ebVI"),
    ytEmbed("DEVELOPERS DEVELOPERS", "https://www.youtube.com/embed/rRm0NDo1CiY"),
];
var videosPosition = new THREE.Vector3(0, 0, 2500);


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
    { // instructions
        html: `<h1>WASD to move<br>Click and drag to rotate camera<br>Hold shift to sprint</h1>`,
        rotation: { x: 0, y: 0, z: 0 },
        position: { x: 900, y: 600, z: 0 },
        sprite: true,
    },
    { // Lain gif
        html: `<img src="img/lain_gentoo.gif">`,
        rotation: { x: Math.PI * 0.25, y: 0, z: 0 },
        position: { x: 0, y: 600, z: 0 },
    },
    { // Thinkpad
        html: `<img src="img/thinkpad_keyboard.png">`,
        rotation: { x: -Math.PI / 2, y: 0, z: 0 },
        position: { x: 0, y: -1000, z: 1000 },
    },
    { // africa-player
        html: `<img id="africa-player" src="img/toto-africa-play.png" style="cursor: pointer; height:350px; width:350px;">`,
        rotation: { x: Math.PI * -0.25, y: 0, z: 0 },
        position: { x: 0, y: -700, z: 350 },
    },
    { //Beato
        html: `<img src="img/beato.png" onClick="ahaha.play()" style="width: 200px; cursor: pointer">`,
        rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
        position: { x: -700, y: -150, z: 180 }
    },
    { // Tuturu
        html: `<img src="img/tut.png" onClick="tuturu.play()" style="width: 200px; cursor: pointer">`,
        rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
        position: { x: -700, y: 50, z: 180 }
    },
    { // Dell
        html: `<img src="img/dell.jpg" onclick="beepy.play()" style="width: 200px; cursor: pointer">`,
        rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
        position: { x: -700, y: 200, z: 180 }
    },
    {  // tfw away from computer
        html: `<img id="easterEgg" style="display: none; cursor: pointer; pointer-events: none;" title="Click to hide" src="img/tfw.jpg" onClick="hideEasterEgg()">`,
        rotation: { x: 0, y: 0, z: 0 },
        position: { x: 0, y: 0, z: 700 },
    },
    { // Box drawing canvas
        html: `<button id="box-cv-clear">Clear</button> <button id="box-cv-toggleCursor">Toggle Cursor</button> <button id="box-cv-undo">Undo</button><br><canvas id="box-cv" width="500" height="500"></canvas>`,
        rotation: { x: 0, y: Math.PI * 0.25, z: 0 },
        position: { x: -1400, y: 0, z: 900 }
    },
    { // Advertising
        html: `` +
            `<div class="ad-box" id="ad-box">` +
            `    <div class="ad-top"><span><b>You won!!! Congratulations</b><b>You won!!! Congratulations</b></span><div class="ad-close-btn"></div><div class="ad-close-btn"></div><div class="ad-close-btn"></div></div>` +
            `    <img src="img/4soft.png" width="50" style="float:left;margin:10px;" /><p>YOU WON A 4CHAN GOLD PASS FOR THE FOLLOWING BOARDS:</p><ul><li>/g/ - Technology</li></ul>` +
            `    ---&gt; <a href="https://www.4chan.org/banned"><div class="ad-cool-button">Claim you're prize here!!<div class="cursor"></div></div></a> &lt;---` +
            `</div>`,
        rotation: { x: 0, y: Math.PI * 0.25, z: 0 },
        position: { x: -1100, y: 700, z: 600 }
    },
    { //doot
        html: `<img src="img/dooting.gif">`,
        rotation: { x: 0, y: 0, z: 0 },
        position: { x: 0, y: 365, z: 365 },
        sprite: true,
    },
    { //carmel dansen
        html: `<video controls><source src="carmel.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
        rotation: { x: 0, y: -100, z: 0 },
        position: { x: -700, y: 500, z: 0 },
    },
    { //winrar
        html: `<img src="img/winrar-sigh.png">`,
        rotation: { x: 0, y: 0, z: 0 },
        position: { x: 900, y: 900, z: 0 }
    },
    { //camerons word
        html: `<iframe src="https://www.cameronsworld.net/"
                        style="width:1200px; height: 900px;">
                </iframe>`,
        rotation: { x: 0, y: Math.PI / -2, z: 0 },
        position: { x: 1500, y: 100, z: 1500 }
    },
    { // Pepe
        html: `<div class='triggered'></div>`,
        rotation: { x: 0, y: Math.PI * -0.2, z: 0 },
        position: { x: 500, y: 200, z: 180 }
    },
    { // Africa rotating
        html: `<img src="img/africa.jpg>`,
        rotation: new THREE.Vector3(0, Math.PI / 2, 0),
        position: new THREE.Vector3(1000, 0, 500),
        animate: function (delta) { this.object.rotation.x += 0.0001 * delta; this.object.rotation.y += 0.0001 * delta },
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
    { // Policy
        element: "#policy",
        rotation: new THREE.Vector3(0, Math.PI * 0.25, 0),
        position: new THREE.Vector3(-2000, 500, 0),
    },
    { // Container
        element: ".container",
    },
    { //Porninator
        html: `<div style="background-color: black;">
                  <div style="color: white; font-family: sans-serif; font-size: 52px; font-weight: bold; text-align: center;">PORNINATOR</span>
                  <div>
                    <img src="img/loading.png" id="porninator-overlay" style="position: absolute; left:0px; width: 1500px; height: 1500px; display: none; pointer-events: none;" ></img>
                    <a id="image-link" href="img/porn.png" target="_blank"><img id="danbooru" src="img/porn.png" style="cursor: pointer; display: block; width: 1500px; height: 1500px;" onLoad="$('#porninator-overlay').hide();"></img></a>
                  </div>
                  <input type="text" id="tag1" placeholder="Tag 1" onClick="$('#tag1').val(prompt('Type first tag', $('#tag1').val()))">
                  <input type="text" id="tag2" placeholder="Tag 2" onClick="$('#tag2').val(prompt('Type second tag', $('#tag2').val()))">
                  <button type="button" onClick="getRandomDanbooru($('#danbooru'), $('#tag1').val(), $('#tag2').val(), $('#image-link'))" style="cursor: pointer;">Get porn</button>
              </div>`,
        rotation: { x: 0, y: 10, z: 0 },
        position: { x: 900, y: 200, z: 2700 }
    }
]


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']; // @type {string[]}
var konamiCodePosition = 0; // @type {number}
var konamiCodeKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b' }; // @type {Object.<number, string>}

// Audio
var tuturu = new Audio("audio/tuturu.mp3");
var ahaha = new Audio("audio/ahaha.wav");
var beepy = new Audio("audio/beep.wav");

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
    createVideos();
    
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

function showEasterEgg() {
    var img = document.getElementById("easterEgg");
    img.style.display = 'block';
    img.style.pointerEvents = 'all';
}

function hideEasterEgg() {
    var img = document.getElementById("easterEgg");
    img.style.display = 'none';
    img.style.pointerEvents = 'none';
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

function createVideos() {
    for (var i = 0; i < hallOfVideos.length; i++) {
        var container = document.createElement("div");
        container.style.height = "700px";

        var elem = document.createElement("div");
        elem.style.height = "700px";
        // elem.innerHTML = hallOfVideos[i].html;

        var btnHide = document.createElement("button")
        btnHide.innerHTML = hallOfVideos[i].name;
        btnHide.style.width = "100%";
        btnHide.style.height = "100px";
        btnHide.style.fontSize = "30px";
        btnHide.style.cursor = "pointer";
        btnHide.addEventListener("click", (function (idx, elem) {
            var toggled = true;
            return function () {
                if (toggled) {
                    elem.innerHTML = hallOfVideos[idx].html;
                } else {
                    elem.childNodes[0].remove();
                }
                toggled = !toggled;
            }
        })(i, elem));

        container.appendChild(elem);
        container.appendChild(btnHide);

        var obj = new THREE.CSS3DObject(container);
        obj.position.x = i * -1000 + videosPosition.x;
        obj.position.y = videosPosition.y;
        obj.position.z = videosPosition.z;
        obj.rotation.y = Math.PI;
        scene.add(obj);
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
