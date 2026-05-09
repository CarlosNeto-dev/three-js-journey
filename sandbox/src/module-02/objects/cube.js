import * as THREE from 'three';

export const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
);

export const light = new THREE.AmbientLight(
    0xffffff, 2
);