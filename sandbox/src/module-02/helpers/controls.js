import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "../core/camera.js";
import { renderer } from "../core/renderer.js";

export const controls = new OrbitControls(camera, renderer.domElement);
