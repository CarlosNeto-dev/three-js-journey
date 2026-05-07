import * as THREE from 'three';
import { cube } from './materials/cube.js';

export const scene = new THREE.Scene();

scene.background = new THREE.Color("#1b1a1a");

scene.add(cube);
