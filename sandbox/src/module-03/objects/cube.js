import * as THREE from 'three';

export const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
);

export const light = new THREE.AmbientLight(
    0xffffff, 2
);