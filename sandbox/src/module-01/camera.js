import * as THREE from 'three';

export const camera = new THREE.PerspectiveCamera(
    50, window.innerWidth / window.innerHeight
);

camera.position.z = 10;
