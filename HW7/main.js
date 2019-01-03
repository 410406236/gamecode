import {sceneFromJSON} from './scene.js';
import {scene,initThree, postMessage} from './threemain.js';
import {Agent as AgentJ} from './agentJ.js';
import {Agent as AgentK} from './agentK.js';

/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agentJ, agentK;

// program starts here ...
init();
animate();


function init() {

  initThree();
  
//  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 400;


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  
  // scene grid [-400,400]x[-400,400]
  var gridXZ = new THREE.GridHelper(800, 80, 'red', 'white');
  scene.add(gridXZ);

  // in scene.js
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
  	let randXZ = [-400 + Math.random()*800, -400 + Math.random()*800];
    agentJ = new AgentJ(new THREE.Vector3(randXZ[0], 0, randXZ[1]), size);
    agentJ = new AgentJ(new THREE.Vector3(500, 0, 0), size);

  	randXZ = [-400 + Math.random()*800, -400 + Math.random()*800];
    agentK = new AgentK(new THREE.Vector3(200,0,-200), size);
	
	agentJ.setEnemy(agentK);
	agentK.setEnemy(agentJ);

}


function animate() {

  agentJ.update(0.01)
  agentK.update(0.01)

  $('#score').text (agentJ.name + '[' + agentJ.score.toFixed(1) + '] ... ' + agentK.name + '[' + agentK.score.toFixed(1) + ']');
    
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentJ)} );
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentK)} );

  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else
  	alert ('game over')

  render();
}

function render() {
  renderer.render(scene, camera);
}


