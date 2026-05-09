import * as THREE from 'three';
import { cube, light } from '../objects/cube.js';
import { axes, grid } from '../helpers/helper.js';

export const scene = new THREE.Scene();

scene.background = new THREE.Color("#292624");

scene.add(axes);
scene.add(grid);

scene.add(light);
scene.add(cube);
