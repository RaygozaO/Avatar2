import camera from "./basic/Camera.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/KeyCode.js";
import light from "./basic/Light.js";
import loopMachine from "./basic/LoopMachine.js";
import renderer from "./basic/Renderer.js";
import resize from "./basic/Resize.js";
import scene from "./basic/Scene.js";
import cube from "./basic/shapes/Cube.js";
import plane from "./basic/shapes/Plane.js";
import ClaireLoader from "./models/characters/claire/ClaireLoader.js";


scene.add( cube );
scene.add( light);
scene.add( plane );

camera.position.set(2,2,2);
camera.lookAt(cube.position);

ClaireLoader().then(claire=>{
    scene.add(claire);
})


//renderer.render(scene,camera);
// console.log(scene,camera,renderer,cube); 

loopMachine.addCallback(()=>{
    /*cube.rotation.y += 0.01*/
    console.log(keyListener.isPressed(keyCode.enter));
    if(keyListener.isPressed(keyCode.enter)) cube.rotation.y += 0.01
    renderer.render(scene, camera);
});

resize.start(renderer);
loopMachine.start()
keyListener.start()