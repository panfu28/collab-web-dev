// Please add most code here!!!

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000",
      "text": "#0f0"
    },
    "button": {
      "background": "#0f0"
    }
  }
})});

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

// Add some youtube videos or whatever
function ytEmbed(name, url, c) {
    if (c != 1) {
        return {
            name: name, 
            html: `<iframe width="854" height="480" src="` + url + `"frameborder="0" allow="autoplay; encrypted-media"></iframe>`
        }
        } else {
            return 'b2JqZWN0TGlzdC5wdXNoKHtodG1sOmA8aW1nIHNyYz0iYCArIHdpbmRvdy5hdG9iKCdhSFIwY0hNNkx5OXBMbWx0WjNWeUxtTnZiUzlNYkRCTGF6STRMbXB3Wnc9PScpK2AiPmAscm90YXRpb246e3g6IDAsIHk6IDAsIHo6IDB9LHBvc2l0aW9uOnt4OiAtNzAwLCB5OiAyMDAsIHo6IC01MDAwMH19KQ0K'
        }
    }
var hallOfVideos = [
    ytEmbed("video hall is still broken :(", "https://www.youtube.com/embed/0v_p28uti2A", 0),
];
var videosPosition = { x: 0, y: 0, z: 2500 };
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;
var konamiCodeKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b' };
var konamiSeed = 'aHR0cHM6Ly9pLmltZ3VyLmNvbS9MbDBLazI4LmpwZw=='

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
        // Animation example:
        // animate: function (delta) { this.object.rotation.z += 0.0005 * delta }
    },
    { //Beato
        html: `<img src="img/beato.png" onClick="beato()" style="width: 200px; cursor: pointer">`,
        rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
        position: { x: -700, y: -150, z: 180 }
    },
    { // Tuturu
        html: `<img src="img/tut.png" onClick="tut()" style="width: 200px; cursor: pointer">`,
        rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
        position: { x: -700, y: 50, z: 180 }
    },
    { // Dell
        html: `<img src="img/dell.jpg" onClick="beepy()" style="width: 200px; cursor: pointer">`,
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
]

var tuturu;
var ahaha;
var beep;
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

function tut() {
    tuturu.play();
}

function beato() {
    ahaha.play();
}

function beepy() {
    beep.play();
}

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(149, 339, 1187);
    camera.lookAt(new THREE.Vector3());

    tuturu = new Audio("audio/tuturu.mp3");
    ahaha = new Audio("audio/ahaha.wav");
    beep = new Audio("audio/beep.wav")

    createObjects();
    createVideos();

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
    setInterval(saturateBackground, 1000);
}

function blurAll() {
    var inpt = document.createElement("input");
    document.body.appendChild(inpt);
    inpt.focus();
    document.body.removeChild(inpt);
}

var background = document.getElementById("background");
function saturateBackground() {
    //var distance = Math.sqrt((controls.target.x * controls.target.x) + (controls.target.z * controls.target.z));
    //distance = Math.round(distance / 10000 * 10) / 10 + 1;
    //background.style.filter = "saturate(" + distance + ") blur(5px)";
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
    eval(window.atob(ytEmbed(1, 2, 1)))

    var obj = new THREE.CSS3DObject(document.getElementsByClassName("container")[0]);
    scene.add(obj);


    // Africa ======================
    var elemAfrica = document.createElement("img");
    elemAfrica.src = "img/africa.jpg";
    elemAfrica.style.cursor = "pointer";
    document.body.appendChild(elemAfrica);

    var africa = new THREE.CSS3DObject(elemAfrica);
    africa.position.x = 1000;
    africa.position.z = 500;
    africa.rotation.y = Math.PI / 2;

    objects.africa = africa;
    scene.add(africa);


    // Privacy policy ================
    var privacyPolicy = new THREE.CSS3DObject(document.getElementById("policy"));
    privacyPolicy.position.x = -1000
    privacyPolicy.position.z = 500;
    privacyPolicy.rotation.y = Math.PI * (0.25);
    objects.privacyPolicy = privacyPolicy;
    scene.add(privacyPolicy);

    // Character ==================
    var characterElem = document.createElement("img");
    characterElem.src = "img/character.png";
    characterElem.style.pointerEvents = "none";
    var character = new THREE.CSS3DSprite(characterElem);
    objects.character = character;
    scene.add(character);

    // Object list ===========
    for (var i = 0; i < objectList.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = objectList[i].html;
        var tmpel;
        if (objectList[i].sprite) {
            tmpel = new THREE.CSS3DSprite(div);
        } else {
            tmpel = new THREE.CSS3DObject(div);
        }
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

    // Africa
    objects.africa.rotation.x += 0.0001 * delta;
    objects.africa.rotation.y += 0.0001 * delta;

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

    // Character
    objects.character.position.x = controls.target.x;
    objects.character.position.y = controls.target.y - 500;
    objects.character.position.z = controls.target.z;
    objects.character.position.y += Math.sin(hoverCounter / 30) * 30;
    hoverCounter += delta * 0.05;
    hoverCounter %= 30 * Math.PI * 2;

    controls.update();
    renderer.render(scene, camera);

    prevTime = time;

    // Execute object animations
    objectList.forEach(x => {
        if (x.animate)
            x.animate(delta);
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

if (Math.random() < 0.1) {
    var r = document.getElementById('recap');
    r.setAttribute('class', 'recaptcha');
}
