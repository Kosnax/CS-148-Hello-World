import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.x = 0.5
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const startButton = document.getElementById('start-button')
const gameOverScreen = document.getElementById('game-over-screen')
const playAgainButton = document.getElementById('play-again-button')

function startGame() {
    startButton.style.display = 'none'
    gameOverScreen.style.display = 'none'

    // Simulate game running for a moment
    setTimeout(() => {
        gameOverScreen.style.display = 'flex'
    }, 2000)
}

startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', () => {
    gameOverScreen.style.display = 'none'
    startButton.style.display = 'block'
})

const tick = () =>
{
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()