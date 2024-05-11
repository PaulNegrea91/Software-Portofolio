const areaElement  = document.getElementById("areaTriangle")
const a = 452;
const b = 782;
const c = 895;
const sp = (a + b + c) / 2
const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
areaElement.innerHTML = area;