import * as THREE from 'three';

import { renderer } from './renderer.js';
import { camera } from './camera.js';
import { scene } from './scene.js';
import { cube } from '../objects/cube.js';
import { cone } from '../objects/cone.js';
import { circle } from '../objects/circle.js';
import { controls } from '../helpers/controls.js';
import { stats } from '../helpers/stats.js';
import {
     createObjectFolder,
    } from '../helpers/debug.js';

const cubeControls = createObjectFolder("Cube", cube);
const coneControls = createObjectFolder("Cone", cone);
const circleControls = createObjectFolder("Circle", circle);

renderer.setAnimationLoop(() => {
    stats.begin();
    
    controls.update();

    cube.rotation.set(
        cubeControls.rotationConfig.rotationX,
        cubeControls.rotationConfig.rotationY,
        cubeControls.rotationConfig.rotationZ
    );

    cube.position.set(
        cubeControls.positionConfig.posX,
        cubeControls.positionConfig.posY,
        cubeControls.positionConfig.posZ
    );

    cube.scale.set(
        cubeControls.scaleConfig.scaleX,
        cubeControls.scaleConfig.scaleY,
        cubeControls.scaleConfig.scaleZ
    );

    cone.rotation.set(
        coneControls.rotationConfig.rotationX,
        coneControls.rotationConfig.rotationY,
        coneControls.rotationConfig.rotationZ
    );

    cone.position.set(
        coneControls.positionConfig.posX,
        coneControls.positionConfig.posY,
        coneControls.positionConfig.posZ
    );

    cone.scale.set(
        coneControls.scaleConfig.scaleX,
        coneControls.scaleConfig.scaleY,
        coneControls.scaleConfig.scaleZ
    );

    circle.rotation.set(
        circleControls.rotationConfig.rotationX,
        circleControls.rotationConfig.rotationY,
        circleControls.rotationConfig.rotationZ
    );

    circle.position.set(
        circleControls.positionConfig.posX,
        circleControls.positionConfig.posY,
        circleControls.positionConfig.posZ
    );

    circle.scale.set(
        circleControls.scaleConfig.scaleX,
        circleControls.scaleConfig.scaleY,
        circleControls.scaleConfig.scaleZ
    );

    renderer.render(scene, camera);
    stats.end();
});
