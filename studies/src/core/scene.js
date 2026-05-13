import { Scene, Color, FogExp2 } from "three";
import { axes, grid } from '../helpers/helper.js';

// ======================= Criando a Cena =======================

export const scene = new Scene();

// ======================= Definindo cores na Cena =======================

export const skyColor = new Color("#4facfe");
export const stormColor = new Color("#1a1a2e")

scene.background = skyColor

// ======================= Colocando efeitos de Perspectiva e Horizontalidade na Cena =======================

scene.fog = new FogExp2(skyColor, 0.002);


// ======================= Adicionando objetos ao cenário =======================

scene.add(axes);
scene.add(grid);
