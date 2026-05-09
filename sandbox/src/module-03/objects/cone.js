import * as THREE from 'three';

export const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.3, 0.5, 32),
    new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
);
