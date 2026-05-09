import * as THREE from 'three';
import { axes, grid } from './helper.js';

export const rotationConfig = {
    rotationX: 0.01,
    rotationY: 0.01,
    rotationZ: 0.01
}

export const positionConfig = {
    posX: 0,
    posY: 0,
    posZ: 0
}

export const scaleConfig = {
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1
}

export const visibleConfig = {
    visible: true,
    wireframe: false
}

export const materialConfig = {
  color: "#ffffff",
  roughness: 1,
  metalness: 0,
  transparent: false,
  transmission: 0,
  ior: 0,
  thickness: 0,
}

export const helperConfig = {
  grid: true,
  axes: true
}

export const gui = new dat.GUI();

const rotationFolder = gui.addFolder("Rotation");
rotationFolder.add(rotationConfig, "rotationX", 0, 10);
rotationFolder.add(rotationConfig, "rotationY", 0, 10);
rotationFolder.add(rotationConfig, "rotationZ", 0, 10);

const positionFolder = gui.addFolder("Position");
positionFolder.add(positionConfig, "posX", -5, 5);
positionFolder.add(positionConfig, "posY", -5, 5);
positionFolder.add(positionConfig, "posZ", -5, 5);

const scaleFolder = gui.addFolder("Scale");
scaleFolder.add(scaleConfig, "scaleX", 0.1, 5);
scaleFolder.add(scaleConfig, "scaleY", 0.1, 5);
scaleFolder.add(scaleConfig, "scaleZ", 0.1, 5);

const visibleFolder = gui.addFolder("Visible");
visibleFolder.add(visibleConfig, "visible");
visibleFolder.add(visibleConfig, "wireframe");

const materialFolder = gui.addFolder("Material");
materialFolder.addColor(materialConfig, "color");
materialFolder.add(materialConfig, "roughness", 0, 1);
materialFolder.add(materialConfig, "metalness", 0, 1);
materialFolder.add(materialConfig, "transparent");
materialFolder.add(materialConfig, "transmission", 0, 1);
materialFolder.add(materialConfig, "ior", 0, 2);
materialFolder.add(materialConfig, "thickness", 0, 5);

const helperFolder = gui.addFolder("Helpers");
helperFolder.add(helperConfig, "grid").onChange((value) => {
  grid.visible = value;
});

helperFolder.add(helperConfig, "axes").onChange((value) => {
  axes.visible = value;
});