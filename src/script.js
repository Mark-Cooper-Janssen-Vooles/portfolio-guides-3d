import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as dat from 'lil-gui'
import { Mesh, Raycaster } from 'three'
import { generateUUID } from 'three/src/math/MathUtils'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()
gui.hide()

window.addEventListener('keydown', (event) => {
    if(event.key === 'h') {
      if(gui._hidden)
        gui.show()
      else
        gui.hide()
    }
  })


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes Helper
const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

// Textures
// const textureLoader = new THREE.TextureLoader()
// const matcapTexture = textureLoader.load('/textures/matcaps/8.png')

// Fonts 
let devopswebdevguideMesh;

const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {

        // title "markjanssen webdev learnings"
        const fontSize = 0.435
        // markjanssen
        const textGeometry1 = new TextGeometry(
            'markjanssen', 
            {
                font,
                size: fontSize,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        textGeometry1.computeBoundingBox()
        // console.log(textGeometry1.boundingBox)
        textGeometry1.translate(
            -2.5, //x
            1.5 - 0.4 -0.5, //y
            - textGeometry1.boundingBox.max.z * 0.5 //z
        )

        // webdev
        const textGeometry2 = new TextGeometry(
            'webdev', 
            {
                font,
                size: fontSize,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        textGeometry2.computeBoundingBox()
        // console.log(textGeometry2.boundingBox)
        textGeometry2.translate(
            -2.5, //x 
            1.5 - 1 - 0.5, //y 
            - textGeometry2.boundingBox.max.z * 0.5 //z 
        )

        // learnings
        const textGeometry3 = new TextGeometry(
            'learnings', 
            {
                font,
                size: fontSize,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        textGeometry3.computeBoundingBox()
        // console.log(textGeometry3.boundingBox)
        textGeometry3.translate(
            -2.5, // x
            1.5 - 1.6 - 0.5, //y 
            - textGeometry3.boundingBox.max.z * 0.5 //z
        )

        // const textMaterial = new THREE.MeshBasicMaterial()
        // const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const material = new THREE.MeshNormalMaterial()
        // textMaterial.wireframe = true
        const text1 = new THREE.Mesh(textGeometry1, material)
        const text2 = new THREE.Mesh(textGeometry2, material)
        const text3 = new THREE.Mesh(textGeometry3, material)

        const textGroup = new THREE.Group()
        textGroup.add(text1, text2, text3)

        scene.add(textGroup)

        // frontend-webdev-guide
        const smallerFont = 0.1
        const frontendwebdevguide = new TextGeometry(
            'frontend-webdev-guide', 
            {
                font,
                size: smallerFont,
                height: 0.02,
                curveSegments: 5,
                bevelEnabled: false,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        frontendwebdevguide.computeBoundingBox()
        // console.log(frontendwebdevguide.boundingBox)
        frontendwebdevguide.translate(
            1.02, //x
            -0.9, //y
            - frontendwebdevguide.boundingBox.max.z * 0.5 //z
        )

        // backend-webdev-guide
        const backendwebdevguide = new TextGeometry(
            'backend-webdev-guide', 
            {
                font,
                size: smallerFont,
                height: 0.02,
                curveSegments: 5,
                bevelEnabled: false,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        backendwebdevguide.computeBoundingBox()
        // console.log(frontendwebdevguide.boundingBox)
        backendwebdevguide.translate(
            1.0, //x
            -1.1, //y
            - backendwebdevguide.boundingBox.max.z * 0.5 //z
        )

        // devops-webdev-guide
        const devopswebdevguide = new TextGeometry(
            'devops-webdev-guide', 
            {
                font,
                size: smallerFont,
                height: 0.02,
                curveSegments: 5,
                bevelEnabled: false,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            }
        )
        devopswebdevguide.computeBoundingBox()
        // console.log(devopswebdevguide.boundingBox)
        devopswebdevguide.translate(
            1.07, //x
            -1.3, //y
            - devopswebdevguide.boundingBox.max.z * 0.5 //z
        )

        // add meshes
        const frontendwebdevguideMesh = new THREE.Mesh(frontendwebdevguide, material)
        scene.add(frontendwebdevguideMesh)

        const backendwebdevguideMesh = new THREE.Mesh(backendwebdevguide, material)
        scene.add(backendwebdevguideMesh)

        devopswebdevguideMesh = new THREE.Mesh(devopswebdevguide, material)
        scene.add(devopswebdevguideMesh)
    }
)

// Objects 
// const planeGeometry = new THREE.PlaneGeometry(5, 2.8)
// planeGeometry.computeBoundingBox()
// console.log(planeGeometry.boundingBox)
// const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
// scene.add(planeMesh)

// Devops Object section
const devopsCube = new THREE.BoxGeometry(0.10, 0.10, 0.10)
const devopsCubeMaterial = new THREE.MeshNormalMaterial()
const devopsCubeMesh = new THREE.Mesh(devopsCube, devopsCubeMaterial)
devopsCubeMesh.position.set(2.65, -1.25, 0)
scene.add(devopsCubeMesh)

const planeDevopsGeometry = new THREE.PlaneGeometry(1.42, 0.13)
const planeDevopsMaterial = new THREE.MeshBasicMaterial()
planeDevopsMaterial.transparent = true
planeDevopsMaterial.opacity = 0
const planeDevopsMesh = new THREE.Mesh(planeDevopsGeometry, planeDevopsMaterial)
planeDevopsGeometry.translate(
    1.78, //x 
    -1.25, //y 
    0 //z 
)
planeDevopsMesh.name = 'devops'
scene.add(planeDevopsMesh)

// Backend Object section
const backendCube = new THREE.BoxGeometry(0.10, 0.10, 0.10)
const backendCubeMaterial = new THREE.MeshNormalMaterial()
const backendCubeMesh = new THREE.Mesh(backendCube, backendCubeMaterial)
backendCubeMesh.position.set(2.65, -1.05, 0)
scene.add(backendCubeMesh)

const planeBackendGeometry = new THREE.PlaneGeometry(1.5, 0.13)
const planeBackendMaterial = new THREE.MeshBasicMaterial()
planeBackendMaterial.transparent = true
planeBackendMaterial.opacity = 0
const planeBackendMesh = new THREE.Mesh(planeBackendGeometry, planeBackendMaterial)
planeBackendGeometry.translate(
    1.75, //x 
    -1.05, //y 
    0 //z 
)
planeBackendMesh.name = 'backend'
scene.add(planeBackendMesh)

// Frontend Object section
const frontendCube = new THREE.BoxGeometry(0.10, 0.10, 0.10)
const frontendCubeMaterial = new THREE.MeshNormalMaterial()
const frontendCubeMesh = new THREE.Mesh(frontendCube, frontendCubeMaterial)
frontendCubeMesh.position.set(2.65, -0.85, 0)
scene.add(frontendCubeMesh)

const planeFrontendGeometry = new THREE.PlaneGeometry(1.5, 0.13)
const planeFrontendMaterial = new THREE.MeshBasicMaterial()
planeFrontendMaterial.transparent = true
planeFrontendMaterial.opacity = 0
const planeFrontendMesh = new THREE.Mesh(planeFrontendGeometry, planeFrontendMaterial)
planeFrontendGeometry.translate(
    1.75, //x 
    -0.85, //y 
    0 //z 
)
planeFrontendMesh.name = 'frontend'
scene.add(planeFrontendMesh)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Base camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2.05

scene.add(camera)

gui.add(camera.position, 'x', -5, 5, 0.0001)
gui.add(camera.position, 'y', -5, 5, 0.0001)
gui.add(camera.position, 'z', -5, 5, 0.0001)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// click and drag left to right
controls.minAzimuthAngle = - Math.PI / 20;
controls.maxAzimuthAngle = Math.PI / 45;
// click and drag up to down
controls.maxPolarAngle = 1.68
controls.minPolarAngle = 1.52
// zoom in / out with wheel
controls.maxDistance = 3
controls.minDistance = 2


// raycaster
const raycaster = new THREE.Raycaster()
let currentIntersect = null
const pointer = new THREE.Vector2()

// mouse 
window.addEventListener('mousemove', (event) =>
{
    pointer.x = event.clientX / sizes.width * 2 - 1
    pointer.y = - (event.clientY / sizes.height) * 2 + 1
})

window.addEventListener('click', () =>
{
    if(currentIntersect)
    {
        switch(currentIntersect.object)
        {
            case planeDevopsMesh:
                // console.log('plane devops mesh')
                window.open('https://github.com/Mark-Cooper-Janssen-Vooles/devops-webdev-guide', '_blank')
                break

            case planeBackendMesh:
                // console.log('plane backend mesh')
                window.open('https://github.com/Mark-Cooper-Janssen-Vooles/backend-webdev-guide', '_blank')
                break

            case planeFrontendMesh:
                // console.log('plane backend mesh')
                window.open('https://github.com/Mark-Cooper-Janssen-Vooles/frontend-webdev-guide', '_blank')
                break
        }
    }
})

document.addEventListener("mousedown", event => {
	isFree = false;
});

document.addEventListener("mouseup", event => {
  isFree = true;
  camPos.copy(camera.position);
})

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

let camPos = new THREE.Vector3().copy(camera.position)
let camShift = new THREE.Vector3()
let isFree = true

document.addEventListener("mousedown", event => {
	isFree = false;
});

document.addEventListener("mouseup", event => {
  isFree = true;
  camPos.copy(camera.position);
})

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // camera rocking
    if (isFree) {
        camShift.set(
          Math.cos(elapsedTime + (Math.PI * 0.01)),
        Math.sin(elapsedTime),
        Math.cos(elapsedTime + (Math.PI * 0.01))
      ).multiplyScalar(0.025);
      camera.position.addVectors(camPos, camShift);
    //   controls.update();
    }

    // ray caster
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects([ 
        planeDevopsMesh, 
            planeBackendMesh, 
            planeFrontendMesh
    ])
    if (intersects.length) {
        if (!currentIntersect) {
            // console.log('mouse enter')
            canvas.style.cursor = 'pointer'
        }
        currentIntersect = intersects[0]

        if (currentIntersect.object.name == 'devops') {
            devopsCubeMesh.rotation.x = elapsedTime * Math.PI * 0.75
            devopsCubeMesh.rotation.y = elapsedTime * Math.PI * 0.75
        }
        if (currentIntersect.object.name == 'backend') {
            backendCubeMesh.rotation.x = elapsedTime * Math.PI * 0.75
            backendCubeMesh.rotation.y = elapsedTime * Math.PI * 0.75
        }
        if (currentIntersect.object.name == 'frontend') {
            frontendCubeMesh.rotation.x = elapsedTime * Math.PI * 0.75
            frontendCubeMesh.rotation.y = elapsedTime * Math.PI * 0.75
        }
    } else {
        if (currentIntersect) {
            // console.log('mouse leave')
            canvas.style.cursor = 'default'
        }
        currentIntersect = null
        frontendCubeMesh.rotation.set(0, 0, 0)
        backendCubeMesh.rotation.set(0, 0, 0)
        devopsCubeMesh.rotation.set(0, 0, 0)
    }

    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()