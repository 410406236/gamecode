/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/


import {scene} from './threemain.js';
import {Obstacle} from './obstacle.js';
import {Target} from './target.js';

function sceneFromJSON () {
  const JSONStr = '{"obstacles":[{"center":{"x":-243.3108135386853,"y":-1.0672730907136216e-15,"z":4.806570693640424},"size":20},{"center":{"x":7.773933276790966,"y":4.577015712253907e-14,"z":-206.13046256175602},"size":20},{"center":{"x":253.98328100677202,"y":-1.669134389282951e-15,"z":7.517113013605979},"size":20},{"center":{"x":-1.5674365239940091,"y":1.170554269644076e-14,"z":203.28292227413996},"size":20},{"center":{"x":-113.55441315514655,"y":-2.7882518536928726e-14,"z":125.57170009306316},"size":20},{"center":{"x":-134.36953905930798,"y":2.04656254244728e-14,"z":-92.16898303555985},"size":20},{"center":{"x":140.99205902091495,"y":1.7332750697448054e-14,"z":-78.05976958233276},"size":20},{"center":{"x":143.4562431678473,"y":-3.538190997497601e-14,"z":159.3459565789584},"size":20}],"targets":[{"id":0,"pos":{"x":-252.3332853079915,"y":4.865577691359372e-14,"z":-219.12613877748265}},{"id":1,"pos":{"x":276.76609137612263,"y":4.678567662619134e-14,"z":-210.70395581999185}},{"id":2,"pos":{"x":214.19562155182595,"y":8.447640334236832e-15,"z":217.95521013857103}},{"id":3,"pos":{"x":-238.0135411062054,"y":-4.040655525093892e-14,"z":181.9749471714539}},{"id":4,"pos":{"x":-9.964918458216815,"y":-6.868043139189476e-15,"z":30.930916522418215}}]}';
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}

export {sceneFromJSON};