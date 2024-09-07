(function(){

const {cos, sin, PI} = Math,
      TWOPI = 2 * PI;

const {
  Color, Curve, CylinderGeometry,
  DirectionalLight, DoubleSide,
  Group,
  Matrix4, Mesh, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial,
  OrbitControls,
  ParametricGeometry, PerspectiveCamera,
  Scene, SceneUtils,
  TubeGeometry,
  Vector3,
  WebGLRenderer
} = THREE;

/* variables */
const settings = {
  a: -2,
  b: 2,
  fn: x => Math.cos(x) + Math.sin(x) + 2,
  slices: 10,
  showGraph: true
};

let camera, container, controls, renderer, scene;
let disks;
let graph;

setup();
populateScene();

/* setup the scene */
function setup() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);
  container = document.getElementById('three-container');

  setupRenderer();
  setupCamera();
  setupControls();
  setupLights();

  container.appendChild(renderer.domElement);

  render();

  function render() {
    // render using requestAnimationFrame
    requestAnimationFrame(render);

    controls.update();

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    const {height, width} = container.getBoundingClientRect();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  });
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  // renderer.shadowMapEnabled = true;

  const {height, width} = container.getBoundingClientRect();

  renderer.setSize(width, height);

  renderer.localClippingEnabled = true;
}

function setupCamera() {
  const {height, width} = renderer.getSize();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

  // position and point the camera to the center of the scene
  camera.up.set(0, 0, 1);
  camera.position.x = 0;
  camera.position.y = -5;
  camera.position.z = 10;
  camera.lookAt(new THREE.Vector3(0, -3, 5));
}

function setupControls() {
  // orbit controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableKeys = false;
}

function setupLights() {
  // lighting
  const light = new THREE.AmbientLight( 0x404040 );
  scene.add(light);

  const lights = [];
  lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
  lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
  lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

  lights[ 0 ].position.set( 0, 200, 0 );
  lights[ 1 ].position.set( 100, 200, 100 );
  lights[ 2 ].position.set( - 100, - 200, - 100 );

  scene.add( lights[ 0 ] );
  scene.add( lights[ 1 ] );
  scene.add( lights[ 2 ] );
}

function populateScene() {
  scene.add(new THREE.AxisHelper(5));

  var geometry = revolutionGeometry();
  var material = new MeshPhongMaterial({
    color: 0x00AEFF
  });
  material.side = DoubleSide;
  var mesh = new Mesh(geometry, material);
  scene.add(mesh);
  graph = mesh;

  // disk/washer method
  disks = new Group();
  disks.visible = false;//!settings.showGraph;
  scene.add(disks);
}

function revolutionGeometry() {
  const surface = revolution(
    settings.fn,
    settings.a,
    settings.b
  );

  return new ParametricGeometry((u, v) => new Vector3(...surface(u, v)), 120, 120);
}

function populateDisks() {
  const {a, b, slices, fn} = settings;

  const width = (b - a) / slices;

  // clean up
  while (disks.children.length)
    disks.remove(disks.children[0]);

  // populate disks
  for (let i = 0; i < slices; ++i) {
    const p = a + i * width;

    const geometry = new CylinderGeometry(fn(p), fn(p), width, 50);
    const material = new MeshPhongMaterial({
      color: 0x5CC26D,
    });
    const mesh = new Mesh(geometry, material);

    mesh.position.set(p + width / 2, 0, 0);
    mesh.rotation.z = Math.PI / 2;

    disks.add(mesh);
  }
}

function revolution(f, a, b) {
  return (s, t) => {
    const x = a + s * (b - a),
          angle = t * TWOPI;

    return [x, f(x) * cos(angle), f(x) * sin(angle)];
  };
}

window.api3 = {
  update(o) {
    Object.assign(settings, o);

    if (o.a || o.b || o.fn)
      graph.geometry = revolutionGeometry();
    graph.visible = settings.showGraph;

    disks.visible = !settings.showGraph;
    if (disks.visible)
      populateDisks();
  }
};

window.graph = graph;

})();