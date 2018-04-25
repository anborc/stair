// "extrude.js";
print = console.log;
var container = undefined;
var camera = undefined;
var scene = undefined;
var renderer = undefined;
var controls = undefined;
var info = document.createElement("div");
info.style.position = "absolute";
info.style.top = "10px";
info.style.width = "100%";
info.style.textAlign = "center";
info.style.color = "#fff";
info.style.link = "#f80";
info.innerHTML = "<a href='http://threejs.org' target='_blank' rel='noopener'>three.js</a> webgl - geometry extrude shapes";
renderer = (new THREE.WebGLRenderer({ antialias: true }));
renderer.setPixelRatio(window.devicePixelRatio);
var wWidth = 900;
var wHeight = 635;
renderer.setSize(wWidth, wHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById("WebGLCanvas").appendChild(renderer.domElement);
scene = (new THREE.Scene());
scene.background = (new THREE.Color("rgb(255, 255, 255)"));
camera = (new THREE.PerspectiveCamera(45, (wWidth / wHeight), 1, 2000));
camera.position.set(14, 12, 16);
controls = (new THREE.OrbitControls(camera, renderer.domElement));
controls.minDistance = 0.1;
controls.maxDistance = 1000;
scene.add((new THREE.AmbientLight()));
var spotLight = (new THREE.SpotLight((new THREE.Color("rgb(255, 255, 255)"))));
spotLight.position.set(-40, 60, 10);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
scene.add(spotLight);
var options = {
  lengthStair: 10,
  heightStair: 8,
  widthStair: 4,
  heightStep: 0.6,
  depthStep: 0.1,
  thicknessStep: 0.15,
  thicknessStair: 0.3,
  heightStrin: 0.1,
  widthStrin: 0.2,
  color1: "#cda650",
  ifStrin: true,
  ifStrin2: true
};
var options1 = {
  material: "Lambert",
  reset: (function() {
    /* stair.sibilant:94:45 */
  
    return resetOptions();
  }),
  download: (function() {
    /* stair.sibilant:94:82 */
  
    return downloadData();
  }),
  loadFile: (function() {
    /* stair.sibilant:94:119 */
  
    return $("#myInput").click();
  }),
  ifEdges: false
};
var resetOptions = (function resetOptions$() {
  /* reset-options stair.sibilant:96:0 */

  options.lengthStair = 10;
  options.heightStair = 8;
  options.widthStair = 4;
  options.heightStep = 0.6;
  options.depthStep = 0.1;
  options.thicknessStep = 0.1;
  options.thicknessStair = 0.3;
  options.heightStrin = 0.1;
  options.widthStrin = 0.2;
  options.color1 = "#cda650";
  options.ifStrin = true;
  options.ifStrin2 = true;
  options1.material = "Lambert";
  options1.ifEdges = false;
  return camera.position.set(14, 12, 16);
});
var optionsTemp = jQuery.extend(true, {  }, options);
var updateOptions = (function updateOptions$(txt) {
  /* update-options stair.sibilant:115:0 */

  var textInput = $.csv.toObjects(txt);
  textInput = textInput[0];
  options.lengthStair = Number(textInput.lengthStair);
  options.heightStair = Number(textInput.heightStair);
  options.widthStair = Number(textInput.widthStair);
  options.heightStep = Number(textInput.heightStep);
  options.depthStep = Number(textInput.depthStep);
  options.thicknessStep = Number(textInput.thicknessStep);
  options.thicknessStair = Number(textInput.thicknessStair);
  options.heightStrin = Number(textInput.heightStrin);
  options.widthStrin = Number(textInput.widthStrin);
  options.color1 = textInput.color1;
  options.ifStrin = textInput.ifStrin === "true";
  options.ifStrin2 = textInput.ifStrin2 === "true";
  return optionsTemp = jQuery.extend(true, {  }, options);
});
var readOptionsTemp = (function readOptionsTemp$() {
  /* read-options-temp stair.sibilant:133:0 */

  options.lengthStair = optionsTemp.lengthStair;
  options.heightStair = optionsTemp.heightStair;
  options.widthStair = optionsTemp.widthStair;
  options.heightStep = optionsTemp.heightStep;
  options.depthStep = optionsTemp.depthStep;
  options.thicknessStep = optionsTemp.thicknessStep;
  options.thicknessStair = optionsTemp.thicknessStair;
  options.heightStrin = optionsTemp.heightStrin;
  options.widthStrin = optionsTemp.widthStrin;
  options.color1 = optionsTemp.color1;
  options.ifStrin = optionsTemp.ifStrin;
  return options.ifStrin2 = optionsTemp.ifStrin2;
});
var downloadData = (function downloadData$() {
  /* download-data stair.sibilant:148:0 */

  var keys = Object.keys(options);
  var index = keys.length;
  var rows = [ keys.splice(0, index), Object.values(options).splice(0, index) ];
  var csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach((function(rowArray) {
    /* stair.sibilant:154:4 */
  
    var row = rowArray.join(",");
    return csvContent = (csvContent + row + "\r\n");
  }));
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  return link.click();
});
var gui = (new dat.GUI({ autoPlace: false }));
document.getElementById("gui").appendChild(gui.domElement);
var size = gui.addFolder("Stair");
size.add(options, "lengthStair", 2, 30).name("Length").listen();
size.add(options, "heightStair", 2, 30).name("Height").listen();
size.add(options, "widthStair", 0.1, 30).name("Width").listen();
size.add(options, "thicknessStair", 0.1, options.heightStair).name("Thickness").listen();
size.open();
var steps = gui.addFolder("Steps");
steps.add(options, "heightStep", 0.1, 2).name("Height").listen();
steps.add(options, "depthStep", 0, options.heightStep).name("Depth").listen();
steps.add(options, "thicknessStep", 0.05, options.heightStep).name("Thickness").listen();
steps.open();
var sizeStrin = gui.addFolder("String");
sizeStrin.add(options, "heightStrin", 0.1, options.heightStep).name("Height").listen();
sizeStrin.add(options, "widthStrin", 0.1, (options.widthStair / 2)).name("Width").listen();
sizeStrin.add(options, "ifStrin2").name("Left?").listen();
sizeStrin.add(options, "ifStrin").name("Right?").listen();
sizeStrin.open();
var materials = gui.addFolder("Materials");
materials.addColor(options, "color1").name("Colour").listen();
materials.add(options1, "ifEdges").name("Edges?").listen();
materials.add(options1, "material", [ "Basic", "Lambert", "Phong", "Wireframe" ]).name("Material").listen();
materials.open();
var others = gui.addFolder("Others");
others.add(options1, "download").name("Download").listen();
others.add(options1, "reset").name("Reset").listen();
others.add(options1, "loadFile").name("Upload").listen();
others.open();
var axes = (new THREE.AxesHelper(10));
scene.add(axes);
var makeShape = (function makeShape$() {
  /* make-shape stair.sibilant:217:0 */

  var len = Math.round((options.heightStair / options.heightStep));
  options.heightStep = (options.heightStair / len);
  var ys_ = _.range(0, options.heightStair, options.heightStep);
  ys_.push(options.heightStair);
  var unit_length = (options.lengthStair / len);
  var xs = Array();
  var ys = Array();
  ys.push(0);
  var i_step = len;
  (function() {
    var while$1 = undefined;
    while (i_step >= 0) {
      while$1 = (function() {
        (function() {
          if (i_step > 0) {
            var x = (unit_length * i_step);
            xs.push(x);
            xs.push(x);
            xs.push((x + options.depthStep));
            return xs.push((x + options.depthStep));
          }
        }).call(this);
        (function() {
          if (i_step < len) {
            var y = ys_[(len - i_step)];
            ys.push((y - options.thicknessStep));
            ys.push((y - options.thicknessStep));
            ys.push(y);
            return ys.push(y);
          }
        }).call(this);
        return ((i_step)--);
      }).call(this);
    };
    return while$1;
  }).call(this);
  xs.push(0);
  var hBottom0 = (options.heightStair - options.thicknessStair);
  var wBottom1 = ((options.lengthStair / options.heightStair) * hBottom0);
  var pts = [];
  pts.push((new THREE.Vector2(0, hBottom0)));
  var iSegments = (xs.length - 1);
  (function() {
    var while$2 = undefined;
    while (iSegments >= 0) {
      while$2 = (function() {
        var x = xs[iSegments];
        var y = ys[iSegments];
        pts.push((new THREE.Vector2(x, y)));
        return ((iSegments)--);
      }).call(this);
    };
    return while$2;
  }).call(this);
  pts.push((new THREE.Vector2(wBottom1, 0)));
  var shape = (new THREE.Shape(pts));
  var vecPtsStrin = [ [ 0, hBottom0 ], [ wBottom1, 0 ], [ xs[3], 0 ], [ xs[3], (ys[3] + options.heightStrin) ], [ xs[(xs.length - 2)], (ys[(ys.length - 2)] + options.heightStrin) ], [ 0, (ys[(ys.length - 1)] + options.heightStrin) ] ];
  var ptsStrin = [];
  vecPtsStrin.forEach((function(vec) {
    /* stair.sibilant:270:2 */
  
    return ptsStrin.push((new THREE.Vector2(vec[0], vec[1])));
  }));
  var shapeStrin = (new THREE.Shape(ptsStrin));
  return {
    "shape": shape,
    "shapeStrin": shapeStrin
  };
});
var setMaterial = (function setMaterial$() {
  /* set-material stair.sibilant:274:0 */

  return (function() {
    switch(options1.material) {
    case "Basic":
      return (new THREE.MeshBasicMaterial({ color: (new THREE.Color(options.color1)) }));
    
    case "Lambert":
      return (new THREE.MeshLambertMaterial({ color: (new THREE.Color(options.color1)) }));
    
    case "Phong":
      return (new THREE.MeshPhongMaterial({ color: (new THREE.Color(options.color1)) }));
    
    case "Wireframe":
      options1.ifEdges = true;
      return (new THREE.MeshLambertMaterial({
        color: (new THREE.Color(options.color1)),
        transparent: true,
        opacity: 0.3
      }));
    
    default:
      return (new THREE.MeshLambertMaterial({ color: (new THREE.Color(options.color1)) }));
    }
  }).call(this);
});
var shapes = makeShape();
var shape = shapes.shape;
var shapeStrin = shapes.shapeStrin;
var extrudeSettings = {
  steps: 1,
  amount: options.widthStair,
  bevelEnabled: false,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 1
};
var geometry = (new THREE.ExtrudeGeometry(shape, extrudeSettings));
var material = setMaterial();
var mesh = (new THREE.Mesh(geometry, material));
var addEdges = (function addEdges$(mesh) {
  /* add-edges stair.sibilant:303:0 */

  var eGeometry = (new THREE.EdgesGeometry(mesh.geometry));
  var eMaterial = (new THREE.LineBasicMaterial({
    color: (new THREE.Color("rgb(0, 0, 0)")),
    linewidth: 1
  }));
  var edges = (new THREE.LineSegments(eGeometry, eMaterial));
  return mesh.add(edges);
});
mesh.castShadow = true;
mesh.receiveShadow = true;
scene.add(mesh);
var strinExtrudeSettings = {
  steps: 1,
  amount: options.widthStrin,
  bevelEnabled: false,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 1
};
var strinGeometry = (new THREE.ExtrudeGeometry(shapeStrin, strinExtrudeSettings));
var strinMaterial = (new THREE.MeshLambertMaterial({ color: (new THREE.Color("rgb(40, 120, 200)")) }));
var meshStrin = (new THREE.Mesh(strinGeometry, strinMaterial));
meshStrin.position.set(0, 0, (-1 * options.widthStrin));
meshStrin.castShadow = true;
meshStrin.receiveShadow = true;
scene.add(meshStrin);
var hasMeshStrin = true;
var meshStrin2 = (new THREE.Mesh(strinGeometry, strinMaterial));
meshStrin.position.set(0, 0, options.widthStair);
meshStrin2.castShadow = true;
meshStrin2.receiveShadow = true;
scene.add(meshStrin2);
var hasMeshStrin2 = true;
var animate = (function animate$() {
  /* animate stair.sibilant:340:0 */

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  var sliderDepthStep = steps.__controllers[1];
  var sliderThicknessStep = steps.__controllers[2];
  var sliderThicknessStair = size.__controllers[3];
  sliderThicknessStair.__max = options.heightStair;
  sliderThicknessStep.__max = options.heightStep;
  sliderDepthStep.__max = options.heightStep;
  material = setMaterial();
  shapes = makeShape();
  shape = shapes.shape;
  geometry = (new THREE.ExtrudeGeometry(shape, extrudeSettings));
  scene.remove(mesh);
  mesh = (new THREE.Mesh(geometry, material));
  (function() {
    if (options1.ifEdges) {
      return addEdges(mesh);
    }
  }).call(this);
  scene.add(mesh);
  extrudeSettings.amount = options.widthStair;
  return (function() {
    if ((options.ifStrin || options.ifStrin2)) {
      var sliderHeightStrin = sizeStrin.__controllers[0];
      var sliderWidthStrin = sizeStrin.__controllers[1];
      sliderHeightStrin.__max = options.heightStep;
      sliderWidthStrin.__max = (options.widthStair / 2);
      shapeStrin = shapes.shapeStrin;
      strinMaterial = setMaterial();
      strinGeometry = (new THREE.ExtrudeGeometry(shapeStrin, strinExtrudeSettings));
      (function() {
        if (options.ifStrin) {
          (function() {
            if (hasMeshStrin) {
              scene.remove(meshStrin);
              return hasMeshStrin = false;
            }
          }).call(this);
          meshStrin = (new THREE.Mesh(strinGeometry, strinMaterial));
          meshStrin.position.set(0, 0, (-1 * options.widthStrin));
          (function() {
            if (options1.ifEdges) {
              return addEdges(meshStrin);
            }
          }).call(this);
          scene.add(meshStrin);
          return hasMeshStrin = true;
        } else {
          return (function() {
            if (hasMeshStrin) {
              scene.remove(meshStrin);
              return hasMeshStrin = false;
            }
          }).call(this);
        }
      }).call(this);
      (function() {
        if (options.ifStrin2) {
          (function() {
            if (hasMeshStrin2) {
              scene.remove(meshStrin2);
              return hasMeshStrin2 = false;
            }
          }).call(this);
          meshStrin2 = (new THREE.Mesh(strinGeometry, strinMaterial));
          meshStrin2.position.set(0, 0, options.widthStair);
          (function() {
            if (options1.ifEdges) {
              return addEdges(meshStrin2);
            }
          }).call(this);
          scene.add(meshStrin2);
          return hasMeshStrin2 = true;
        } else {
          return (function() {
            if (hasMeshStrin2) {
              scene.remove(meshStrin2);
              return hasMeshStrin2 = false;
            }
          }).call(this);
        }
      }).call(this);
      return strinExtrudeSettings.amount = options.widthStrin;
    } else {
      (function() {
        if (hasMeshStrin) {
          scene.remove(meshStrin);
          return hasMeshStrin = false;
        }
      }).call(this);
      return (function() {
        if (hasMeshStrin2) {
          scene.remove(meshStrin2);
          return hasMeshStrin2 = false;
        }
      }).call(this);
    }
  }).call(this);
});
animate();
