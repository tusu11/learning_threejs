
      window.addEventListener("load", function(){
        threeStart()
      })

      function threeStart(){
        initThree()
        initCamera()
        initObject()
        loop()
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
        camera.position.set( 50, 50, 100)
        camera.up.set(0, 0, 1)
        camera.lookAt(0, 0, 0)
        trackball = new THREE.TrackballControls(camera, canvasFrame)
        trackball.noRotate = false
        trackball.zoomSpeed = 4
        trackball.noPan = false
        trackball.panSpeed = 1.0
        trackball.target = new THREE.Vector3(0, 0, 10)
        trackball.staticMoving = false
        trackball.dynamicDampingFactor = 0.2
        trackball.maxDistance = 400
        trackball.minDistance = 40
      }

      let axis
      let lines
      function initObject(){
        axis = new THREE.AxesHelper(50)
        scene.add(axis)
        axis.position.set(0, 0, 0)

        const geometry = new THREE.Geometry()
        //const material = new THREE.MeshNormalMaterial({opacity: 0.5, transparent: true,side: THREE.DoubleSide, wireframe: false})
        //const material = new THREE.MeshBasicMaterial({color: 0xff0000})
        geometry.vertices[0] = new THREE.Vector3(50, 0, 0)
        geometry.vertices[1] = new THREE.Vector3(0, 50, 0)
        geometry.vertices[2] = new THREE.Vector3(0, 0, 50)
        geometry.vertices[3] = new THREE.Vector3(0, 50, 50)
        geometry.vertices[4] = new THREE.Vector3(50, 0, 50)
        geometry.vertices[5] = new THREE.Vector3(0, 0, 50)
        geometry.vertices[6] = new THREE.Vector3(50, 0, 0)
        const color = new THREE.Color("red")
        // const material = new THREE.LineBasicMaterial({color: color, linewidth: 10.0})
        const material = new THREE.LineDashedMaterial( {
          color: color,
          linewidth: 1,
          scale: 1,
          dashSize: 3,
          gapSize: 10,
        } )

      lines = new THREE.Line(geometry, material)
        // lines = new THREE.LineSegments(geometry, material)
        scene.add(lines)
      }

      let step = 0
      function loop(){
        step++
        trackball.update()
        renderer.render(scene, camera)
        requestAnimationFrame(loop)
      }

    