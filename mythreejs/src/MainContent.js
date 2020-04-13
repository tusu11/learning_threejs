import React from 'react';
// import Sidebar from 'react-sidebar';
// import List from './List'
import './App.css';
import page from './pages/1-3.html'

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleContentChanged = this.handleContentChanged.bind(this)
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleContentChanged() {

  }

  render() {
    return (
      <div className="Main">
        <p>hello, world</p>
        <html lang="ja">
          <head>
            <meta charset="utf-8" />
            <title>トーラスオブジェクト</title>
            <script src="three.js-master/build/three.js"></script>
            <script type="text/javascript">{
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
                //renderer = new THREE.WebGLRenderer()
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
                camera.position.set(100, 100, 200)
                camera.up.set(0, 0, 1)
                camera.lookAt(0, 0, 0)
              }

              let axis
              let grid
              let torus
              function initObject(){
                axis = new THREE.AxesHelper(50)
                scene.add(axis)
                axis.position.set(0, 0, 0)
                grid = new THREE.GridHelper(50, 10)
                grid.rotation.set(Math.PI/2, 0, 0)
                scene.add(grid)

                let geometry = new THREE.TorusGeometry(40, 10, 50, 50, 2*Math.PI*3/4)
                let material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide, wireframe: false})
                torus = new THREE.Mesh(geometry, material)
                //フラットシェーディング
                for(let i=0; i<geometry.faces.length; i++){
                  geometry.faces[i].vertexNormals[0].copy(geometry.faces[i].normal)
                  geometry.faces[i].vertexNormals[1].copy(geometry.faces[i].normal)
                  geometry.faces[i].vertexNormals[2].copy(geometry.faces[i].normal)
                }

                scene.add(torus)
              }

              function draw(){
                //requestAnimationFrame(draw)
                renderer.render(scene, camera)
              }
            }
            </script>
          </head>
          <body>
            <div id="canvas-frame"></div>
          </body>
        </html>
      </div>
    );
  }
}

export default MainContent