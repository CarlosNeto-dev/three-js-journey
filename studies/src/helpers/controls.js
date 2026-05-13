import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "../core/camera.js";
import { renderer } from "../core/renderer.js";

// ======================= Colocando controles para auxiliar no debug ======================= 

export const controls = new OrbitControls(camera, renderer.domElement);
