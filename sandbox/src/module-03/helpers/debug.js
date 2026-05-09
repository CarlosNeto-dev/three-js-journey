import * as THREE from 'three';
import { axes, grid } from './helper.js';

export const gui = new dat.GUI();

const helperConfig = { grid: true, axes: true }
const helperFolder = gui.addFolder("Helpers");
helperFolder.add(helperConfig, "grid").onChange(v => grid.visible = v);
helperFolder.add(helperConfig, "axes").onChange(v => axes.visible = v);

export function createObjectFolder(name, object) {
  const rotationConfig = { rotationX: 0, rotationY: 0, rotationZ: 0 }
  const positionConfig = { posX: 0, posY: 0, posZ: 0 }
  const scaleConfig = { scaleX: 1, scaleY: 1, scaleZ: 1 }
  const visibleConfig = { visible: true, wireframe: false }
  const materialConfig = {
    color: "#ffffff", roughness: 1, metalness: 0,
    transparent: false, transmission: 0, ior: 0, thickness: 0
  }

  const folder = gui.addFolder(name);

  const rotationFolder = folder.addFolder("Rotation");
  rotationFolder.add(rotationConfig, "rotationX", 0, 10);
  rotationFolder.add(rotationConfig, "rotationY", 0, 10);
  rotationFolder.add(rotationConfig, "rotationZ", 0, 10);

  const positionFolder = folder.addFolder("Position");
  positionFolder.add(positionConfig, "posX", -5, 5);
  positionFolder.add(positionConfig, "posY", -5, 5);
  positionFolder.add(positionConfig, "posZ", -5, 5);

  const scaleFolder = folder.addFolder("Scale");
  scaleFolder.add(scaleConfig, "scaleX", 0.1, 5);
  scaleFolder.add(scaleConfig, "scaleY", 0.1, 5);
  scaleFolder.add(scaleConfig, "scaleZ", 0.1, 5);

  const visibleFolder = folder.addFolder("Visible");
  visibleFolder.add(visibleConfig, "visible").onChange(v => object.visible = v);
  visibleFolder.add(visibleConfig, "wireframe").onChange(v => object.material.wireframe = v);

  const materialFolder = folder.addFolder("Material");
  materialFolder.addColor(materialConfig, "color").onChange(v => object.material.color.set(v));
  materialFolder.add(materialConfig, "roughness", 0, 1).onChange(v => object.material.roughness = v);
  materialFolder.add(materialConfig, "metalness", 0, 1).onChange(v => object.material.metalness = v);
  materialFolder.add(materialConfig, "transparent").onChange(v => object.material.transparent = v);
  materialFolder.add(materialConfig, "transmission", 0, 1).onChange(v => object.material.transmission = v);
  materialFolder.add(materialConfig, "ior", 0, 2).onChange(v => object.material.ior = v);
  materialFolder.add(materialConfig, "thickness", 0, 5).onChange(v => object.material.thickness = v);

  return { rotationConfig, positionConfig, scaleConfig, visibleConfig };
}