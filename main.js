window.onload = function() {
  console.log( 'testing' )
}

window.onload = function() {
  // get HTML element
  boxElement = document.querySelector( 'a-box' )
  // get underlying JS 3d object
  box = boxElement.object3D
  // change rotation, expressed in radians
  box.rotation.x = Math.PI / 4
}

window.onload = function() {
  boxElement = document.querySelector( 'a-box' )
  box = boxElement.object3D
  
  // create our animation function
  animate = function() {
    box.rotation.x += .01
    window.requestAnimationFrame( animate )
  }
  // call our newly made function
  animate()
}
