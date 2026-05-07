import { renderer } from './renderer.js';
import { camera } from './camera.js';
import { scene } from './scene.js';
import { cube } from './materials/cube.js';

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
});
