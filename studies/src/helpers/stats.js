import { renderer } from '../core/renderer.js';

// =========================================== Adicionando Status para auxiliar no Debug ===========================================

export const stats = new Stats();
document.body.appendChild(stats.dom);
