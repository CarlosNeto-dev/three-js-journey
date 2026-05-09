import * as THREE from 'three';

export const circle = new THREE.Mesh(
    new THREE.CircleGeometry(0.5, 32),
    new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
);