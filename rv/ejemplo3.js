


  renderer = new THREE.WegGLRenderer();
  renderer.setSize( window.innerHeight*.95,
                    window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );
  
  step = 0.01;
}
//la funcion loop() se modifica para determinar las intersecciones entre
//los objetos de la escena por medio del rayo trazado
function loop() {
  obstaculo1 = raycaster1.intersectObject( cubo1 );
  obstaculo2 = raycaster2.intersectObject( cubo2 );
}
