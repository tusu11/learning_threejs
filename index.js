window.addEventListener("load", function(){
  threeStart()
})

function threeStart(){
  initThree()
  initCamera()
  initObject()
  draw()
}

let renderer, scene, canvasFrame
function initThree(){
  canvasFrame = document.getElementById('canvas-frame')
  renderer = new THREE.WebGLRenderer()
  if(!renderer) alert('three.jsの初期化に失敗')
  renderer.setSize(canvasFrame.clientWidth, canvasFrame.clientHeight)
  canvasFrame.appendChild(renderer.domElement)
  renderer.setClearColor(0x000000, 1.0)
  scene = new THREE.Scene()
}

let camera
function initCamera(){
  camera = new THREE.PerspectiveCamera(45, canvasFrame.clientWidth/canvasFrame.clientHeight, 1, 1000)
  camera.position.set(40, 40, 80)
  camera.up.set(0, 0, 1)
  camera.lookAt(0, 0, 0)
}

let axis
let arrows
function initObject(){
  arrows = new THREE.Group()
  arrows.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      30,
      0xFF0000,
      5,
      2
    )
  )
  arrows.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 0),
      30,
      0x00FF00,
      5,
      2
    )
  )
  arrows.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, 0),
      30,
      0x0000FF,
      5,
      2
    )
  )
  scene.add(arrows)
  arrows.position.set(5, 15, 10)
  arrows.rotation.set(Math.PI/6, Math.PI/6, Math.PI/6)
}

function draw(){
  //requestAnimationFrame(draw)
  renderer.render(scene, camera)
}
