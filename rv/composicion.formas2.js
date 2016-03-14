function setup(){
 
 // Se plantean las geometrias a utilizar
 dia = 0.1;
 mul=1;
 var cilindroForma1=new THREE.CylinderGeometry(dia, dia, mul*2);
 
 // Para generar una forma combinada se requiere de las mallas para
 // poder desplazar las formas en el espacio vectorial
 var cilindro1 = new THREE.Mesh(cilindroForma1);
 
 // se desplazan las mallas
 cilindro1.position.x=2;
 cilindro1.position.z=2;
 cilindro1.rotateZ(1.57);
 
 // Se genera una forma  (geometrica) abstracta
 var forma=new THREE.Geometry();
 
 // Se utiliza el paquete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, cilindro1);
 // THREE.GeometryUtils.merge(forma, cilindro2);
 
 // Se genera la malla a partir de la forma
 malla=new THREE.Mesh(forma);
 wireframe = new THREE.WireframeHelper( malla, 0x00ff00 );
 escena=new THREE.Scene();
 escena.add(malla,wireframe);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=10;
 renderer=new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
//malla.rotation.x+=0.01;
malla.rotation.y+=0.01;
renderer.render(escena,camara);
}

var escena,camara,renderer,malla,wireframe,dia,mul;
setup();
loop();
