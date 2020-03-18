//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////

// init renderer
var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
renderer.setClearColor(new THREE.Color("lightgrey"), 0);
renderer.setSize(640, 480);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0px";
renderer.domElement.style.left = "0px";
document.body.appendChild(renderer.domElement);

// array of functions for the rendering loop
var onRenderFcts = [];

// init scene and camera
var scene = new THREE.Scene();

//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
var camera = new THREE.Camera();
scene.add(camera);

////////////////////////////////////////////////////////////////////////////////
//          handle arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
  // to read from the webcam
  sourceType: "webcam"

  // to read from an image
  // sourceType : 'image',
  // sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/images/img.jpg',

  // to read from a video
  // sourceType : 'video',
  // sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/videos/headtracking.mp4',
});

arToolkitSource.init(function onReady() {
  onResize();
});

// handle resize
window.addEventListener("resize", function() {
  onResize();
});
function onResize() {
  arToolkitSource.onResizeElement();
  arToolkitSource.copyElementSizeTo(renderer.domElement);
  if (arToolkitContext.arController !== null) {
    arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
  }
}
////////////////////////////////////////////////////////////////////////////////
//          initialize arToolkitContext
////////////////////////////////////////////////////////////////////////////////

// create atToolkitContext
var arToolkitContext = new THREEx.ArToolkitContext({
  cameraParametersUrl:
//        THREEx.ArToolkitContext.baseURL + "camera_para.dat",
  '/assets/camera_para.dat',
  detectionMode: "mono_and_matrix",
  matrixCodeType: "4x4"
});
// initialize it
arToolkitContext.init(function onCompleted() {
  // copy projection matrix to camera
  camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
});

// update artoolkit on every frame
onRenderFcts.push(function() {
  if (arToolkitSource.ready === false) return;

  arToolkitContext.update(arToolkitSource.domElement);
});
(function() {
  //////////////////////////////////////////////////////////////////////////////
  //		markerRoot1
  //////////////////////////////////////////////////////////////////////////////

  // build markerControls
  var markerRoot1 = new THREE.Group();
  markerRoot1.name = "E6";
  scene.add(markerRoot1);
  var markerControls = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerRoot1,
    {
      type: "pattern",
      // patternUrl : THREEx.ArToolkitContext.baseURL + '../data/data/patt.kanji',
      // patternUrl: THREEx.ArToolkitContext.baseURL + "patt.hiro"
      patternUrl: '/assets/pattern/pattern-E6.patt',
    }
  );

  // add a gizmo in the center of the marker
  var geometry = new THREE.OctahedronGeometry(0.1, 0);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  markerRoot1.add(mesh);

  //////////////////////////////////////////////////////////////////////////////
  //		markerRoot2
  //////////////////////////////////////////////////////////////////////////////

  // build markerControls
  var markerRoot2 = new THREE.Group();
  markerRoot2.name = "56";
  scene.add(markerRoot2);
  var markerControls = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerRoot2,
    {
      type: "pattern",
      // patternUrl: THREEx.ArToolkitContext.baseURL + '../data/data/patt.hiro',
      // patternUrl: THREEx.ArToolkitContext.baseURL + "patt.kanji"
      patternUrl: '/assets/pattern/pattern-56.patt',
    }
  );

  // add a gizmo in the center of the marker
  var geometry = new THREE.OctahedronGeometry(0.1, 0);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  markerRoot2.add(mesh);
  
  
  /*
  //////////////////////////////////////////////////////////////////////////////
  //		markerRoot3
  //////////////////////////////////////////////////////////////////////////////

  // build markerControls
  var markerRoot3 = new THREE.Group();
  markerRoot3.name = "marker3";
  scene.add(markerRoot3);
  var markerControls = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerRoot3,
    {
      type: "pattern",
      patternUrl: 'https://cdn.glitch.com/e866e572-0778-42c3-90aa-ead5eed8d911%2Fpattern-Frame3.patt?v=1570696656923',
    }
  );

  // add a gizmo in the center of the marker
  var geometry = new THREE.OctahedronGeometry(0.1, 0);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  markerRoot3.add(mesh);

  //////////////////////////////////////////////////////////////////////////////
  //		markerRoot4
  //////////////////////////////////////////////////////////////////////////////

  // build markerControls
  var markerRoot4 = new THREE.Group();
  markerRoot4.name = "marker4";
  scene.add(markerRoot4);
  var markerControls = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerRoot4,
    {
      type: "pattern",
      patternUrl: 'https://cdn.glitch.com/e866e572-0778-42c3-90aa-ead5eed8d911%2Fpattern-Frame1.patt?v=1570696660318',
    }
  );

  // add a gizmo in the center of the marker
  var geometry = new THREE.OctahedronGeometry(0.1, 0);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  markerRoot4.add(mesh);

  //////////////////////////////////////////////////////////////////////////////
  //		markerRoot5
  //////////////////////////////////////////////////////////////////////////////

  // build markerControls
  var markerRoot5 = new THREE.Group();
  markerRoot5.name = "marker5";
  scene.add(markerRoot5);
  var markerControls = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerRoot5,
    {
      type: "pattern",
      patternUrl: 'https://cdn.glitch.com/e866e572-0778-42c3-90aa-ead5eed8d911%2Fpattern-Frame2.patt?v=1570696663241',
    }
  );

  // add a gizmo in the center of the marker
  var geometry = new THREE.OctahedronGeometry(0.1, 0);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  markerRoot5.add(mesh);
  */
  
})();
(function() {
  var markerRoot1 = scene.getObjectByName("E6");
  var markerRoot2 = scene.getObjectByName("56");
  /*var markerRoot3 = scene.getObjectByName("marker3");
  var markerRoot4 = scene.getObjectByName("marker4");
  var markerRoot5 = scene.getObjectByName("marker5");
  */
  
  var container = new THREE.Group();
  scene.add(container);

  // update container.visible and scanningSpinner visibility
  onRenderFcts.push(function() {
    if (markerRoot1.visible === true && markerRoot2.visible === true) {
      container.visible = true;
      document.querySelector(".scanningSpinner").style.display = "none";
    } else {
      container.visible = false;
      document.querySelector(".scanningSpinner").style.display = "";
    }
  });

  //////////////////////////////////////////////////////////////////////////////
  //		build lineMesh
  //////////////////////////////////////////////////////////////////////////////
  var material = new THREE.LineDashedMaterial({
    dashSize: 1,
    gapSize: 1
  });
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(1, 0, -3));
  geometry.vertices.push(new THREE.Vector3(-1, 0, -3));
  //geometry.vertices.push(new THREE.Vector3(-1, -1, -1));
  var lineMesh = new THREE.Line(geometry, material);
  container.add(lineMesh);

  // update lineMesh
  onRenderFcts.push(function() {
    var geometry = lineMesh.geometry;
    geometry.vertices[0].copy(markerRoot1.position);
    geometry.vertices[1].copy(markerRoot2.position);
    //geometry.vertices[2].copy(markerRoot3.position);
    geometry.verticesNeedUpdate = true;

    geometry.computeBoundingSphere();
    lineMesh.computeLineDistances();

    var length = markerRoot1.position.distanceTo(markerRoot2.position);
    lineMesh.material.scale = length * 10;
    lineMesh.material.needsUpdate = true;
  });

  //////////////////////////////////////////////////////////////////////////////
  //		display the distance between the 2 markers
  //////////////////////////////////////////////////////////////////////////////

  // build texture
  var canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  var context = canvas.getContext("2d");
  var texture = new THREE.CanvasTexture(canvas);

  // build sprite
  var material = new THREE.SpriteMaterial({
    map: texture,
    color: 0xffffff
  });
  
  var sprite = new THREE.Sprite(material);
  sprite.scale.multiplyScalar(0.5);
  container.add(sprite);

  // upload measure
  onRenderFcts.push(function() {
    // update sprite position
    sprite.position
      .addVectors(markerRoot1.position, markerRoot2.position)
      .multiplyScalar(1 / 2);

    // get the text to display
    var length = markerRoot1.position.distanceTo(markerRoot2.position);
    var text = length.toFixed(2);

    console.log(markerRoot1.position);
    
    // put the text in the sprite
    context.font = "40px monospace";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fff";
    context.fillText(text, canvas.width / 4, (3 * canvas.height) / 4);
    sprite.material.map.needsUpdate = true;
  });
})();

//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// render the scene
onRenderFcts.push(function() {
  renderer.render(scene, camera);
});

// run the rendering loop
var lastTimeMsec = null;
requestAnimationFrame(function animate(nowMsec) {
  // keep looping
  requestAnimationFrame(animate);
  // measure time
  lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
  var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
  lastTimeMsec = nowMsec;
  // call each update function
  onRenderFcts.forEach(function(onRenderFct) {
    onRenderFct(deltaMsec / 1000, nowMsec / 1000);
  });
});