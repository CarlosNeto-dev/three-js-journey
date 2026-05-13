import { PerspectiveCamera } from "three";

// ======================= Definindo a minha câmera =======================

export const camera = new PerspectiveCamera(
    50, window.innerWidth / window.innerHeight, 0.1, 2000
);

// ======================= Configurações da Câmera =======================

camera.position.set(1.4, 2, 10);
camera.rotation.y = - Math.PI * 0.025;
