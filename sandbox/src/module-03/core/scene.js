import * as THREE from 'three';
import { cube, light } from '../objects/cube.js';
import { cone } from '../objects/cone.js';
import { circle } from '../objects/circle.js';
import { axes, grid } from '../helpers/helper.js';

export const scene = new THREE.Scene();

scene.background = new THREE.Color("#292624");

scene.add(axes);
scene.add(grid);

scene.add(light);
scene.add(cube);
scene.add(cone);
scene.add(circle);
