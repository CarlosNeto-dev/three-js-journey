import * as THREE from 'three';

import { renderer } from './renderer.js';
import { camera } from './camera.js';
import { scene } from './scene.js';
import { cube } from '../objects/cube.js';
import { controls } from '../helpers/controls.js';
import { stats } from '../helpers/stats.js';
import {
     rotationConfig,
     positionConfig,
     scaleConfig,
     visibleConfig,
     materialConfig
    } from '../helpers/debug.js';

renderer.setAnimationLoop(() => {
    stats.begin();
    
    controls.update();

    cube.rotation.set(rotationConfig.rotationX, rotationConfig.rotationY, rotationConfig.rotationZ);

    cube.position.set(positionConfig.posX, positionConfig.posY, positionConfig.posZ);
    
    cube.scale.set(scaleConfig.scaleX, scaleConfig.scaleY, scaleConfig.scaleZ);

    cube.material.color.set(materialConfig.color);
    cube.material.roughness = materialConfig.roughness;
    cube.material.metalness = materialConfig.metalness;
    cube.material.transparent = materialConfig.transparent
    cube.material.transmission = materialConfig.transmission;
    cube.material.ior = materialConfig.ior;
    cube.material.thickness = materialConfig.thickness;

    cube.material.wireframe = visibleConfig.wireframe;
    cube.visible = visibleConfig.visible;

    renderer.render(scene, camera);
    stats.end();
});
