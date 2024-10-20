import * as THREE from 'three';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometries = [
    { geometry: new THREE.BoxGeometry( 1, 1, 1 ), position: [-3, 2, 0] },      
    { geometry: new THREE.ConeGeometry( 0.7, 1, 32 ), position: [-3, -2, 0] },  
    { geometry: new THREE.CylinderGeometry( 0.3, 0.3, 1, 32 ), position: [0, 0, 0] },  
    { geometry: new THREE.SphereGeometry( 0.7, 32, 32 ), position: [3, 2, 0] }, 
    { geometry: new THREE.TorusGeometry( 0.7, 0.3, 16, 100 ), position: [3, -2, 0] }  
];

const meshes = geometries.map((item) => {
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const mesh = new THREE.Mesh(item.geometry, material);
    mesh.position.set(...item.position);
    scene.add(mesh);
    return mesh;
});

camera.position.z = 7;

function animate() {
    meshes.forEach(mesh => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    });

    renderer.render( scene, camera );
}