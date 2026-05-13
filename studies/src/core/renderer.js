import { WebGLRenderer, SRGBColorSpace, ACESFilmicToneMapping } from 'three';

// ======================= Definindo o meu Canvas do HTML no Javascript e colocando no WebGLRenderer =======================

const canvasWebGL = document.querySelector(".webgl");

export const renderer = new WebGLRenderer({
    canvas: canvasWebGL,
    antialias: true,
    alpha: true
})

// ======================= Configurações de Tamanho, Quantidades de Pixels e Coloração =======================

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.outputColorSpace = SRGBColorSpace;

renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
