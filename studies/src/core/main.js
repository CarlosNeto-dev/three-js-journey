import { 
    BoxGeometry, 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh, 
    AmbientLight, 
    DirectionalLight 
} from 'three';

// Importações do Core
import { renderer } from './renderer.js';
import { camera } from './camera.js';
import { scene } from './scene.js';

// Importações de Helpers e Debug
import { createObjectFolder, createCameraFolder } from '../helpers/debug.js'; 
import { axes, grid } from '../helpers/helper.js';
import { controls } from '../helpers/controls.js';
import { stats } from '../helpers/stats.js';

/**
 * =============================================================
 * 💡 ILUMINAÇÃO (Para sair do preto)
 * =============================================================
 */
const ambientLight = new AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const sunLight = new DirectionalLight(0xffffff, 1);
sunLight.position.set(5, 10, 7);
scene.add(sunLight);

// Adicionando Helpers Visuais
scene.add(axes, grid);

/**
 * =============================================================
 * 📦 OBJETOS E DEBUG
 * =============================================================
 */

// 1. O Iate (Cubo de Referência)
const yacht = new Mesh(
    new BoxGeometry(2, 2, 2), 
    new MeshStandardMaterial()
);
scene.add(yacht);
const yachtDebug = createObjectFolder("Iate", yacht);

// 2. A Supercélula (Plano Vertical Esticado ao Fundo)
const storm = new Mesh(
    new PlaneGeometry(50, 30), 
    new MeshStandardMaterial({ transparent: true })
);
storm.position.set(0, 15, -60); // Posicionado para "brotar" do horizonte
scene.add(storm);
const stormDebug = createObjectFolder("Tempestade", storm);

// 3. Câmera (Com a função que criamos para detectar Mouse + GUI)
const camDebug = createCameraFolder(camera);

/**
 * =============================================================
 * 🔄 LOOP DE ANIMAÇÃO (setAnimationLoop)
 * =============================================================
 */

renderer.setAnimationLoop(() => {
    stats.begin();

    // 1. Atualiza os controles do mouse (OrbitControls)
    controls.update();

    /**
     * 2. SINCRONIZAÇÃO DA CÂMERA (Mouse -> GUI)
     * Copiamos os valores que o mouse alterou na câmera de volta para o config do debug.
     * Isso faz com que os sliders do GUI se movam sozinhos (.listen())
     */
    camDebug.posX = camera.position.x;
    camDebug.posY = camera.position.y;
    camDebug.posZ = camera.position.z;
    camDebug.rotX = camera.rotation.x;
    camDebug.rotY = camera.rotation.y;
    camDebug.rotZ = camera.rotation.z;

    /**
     * 3. SINCRONIZAÇÃO DOS OBJETOS (GUI -> Mesh)
     * Aplicamos as alterações feitas manualmente nos menus para os objetos 3D
     */
    
    // Iate
    yacht.position.set(yachtDebug.positionConfig.posX, yachtDebug.positionConfig.posY, yachtDebug.positionConfig.posZ);
    yacht.rotation.set(yachtDebug.rotationConfig.rotationX, yachtDebug.rotationConfig.rotationY, yachtDebug.rotationConfig.rotationZ);
    yacht.scale.set(yachtDebug.scaleConfig.scaleX, yachtDebug.scaleConfig.scaleY, yachtDebug.scaleConfig.scaleZ);

    // Tempestade
    storm.position.set(stormDebug.positionConfig.posX, stormDebug.positionConfig.posY, stormDebug.positionConfig.posZ);
    storm.rotation.set(stormDebug.rotationConfig.rotationX, stormDebug.rotationConfig.rotationY, stormDebug.rotationConfig.rotationZ);
    storm.scale.set(stormDebug.scaleConfig.scaleX, stormDebug.scaleConfig.scaleY, stormDebug.scaleConfig.scaleZ);

    // 4. RENDERIZAÇÃO
    renderer.render(scene, camera);

    stats.end();
});

/**
 * =============================================================
 * 📐 RESPONSIVIDADE
 * =============================================================
 */
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});