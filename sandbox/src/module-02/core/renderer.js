import * as THREE from 'three'
import { camera } from './camera.js';

export const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

document.getElementById('scene').appendChild(renderer.domElement);

renderer.outputEncoding = THREE.sRGBEncoding;

renderer.physicallyCorrectLights = true;
