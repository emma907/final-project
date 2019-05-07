let camera, scene, renderer, controls, model, octahedron;
let height = window.innerHeight;

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  //camera
camera = new THREE.PerspectiveCamera(50, width/height, .1, 2000);// FOV, aspect ration, near, far
  camera.position.set(0.092, -30.010, 80); // x, y (move up), back out on the z-axis
  scene.add(camera);

  
  

  //load model (with material)
  let loader = new THREE.GLTFLoader();

  // load the glTF resource
  loader.load(
    // path to the model
    'media/colorful_scene.gltf',
    // function to call when the resource is loaded
    function(gltf) {
      model = gltf.scene;
      model.castShadow = true; 
      model.scale.set( 10, 10, 10 );
      model.position.y = -60;
      scene.add(model);

      gltf.animations;
      gltf.scene;
      gltf.scenes;
      gltf.cameras;
      gltf.light; 
      gltf.assets;
      
    }
  );



  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);



  controls.update();
}

init();
animate();