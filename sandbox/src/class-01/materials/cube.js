import * as THREE from 'three';

export const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);