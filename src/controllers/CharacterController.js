import loopMachine from "../basic/LoopMachine";

class CharacterController {
    constructor(){
        this.controller = {}
        this.character = null
        this.state = {}
    }
    addConstroller(controller){
        this.controller[controller.constructor.name] = controller
    }
    removeController(){
        delete this.controller[controller.constructor.name]
    }
    addCharacter(character){
        this.character = character
    }
    star(){
        Object.keys(this.controller).forEach(key =>{
            this.controller[key].init(this)
        });
        loopMachine.addCallback(this.tick)
    }
    tick = ()=>{
        Object.keys(this.controller).forEach(key => {
            this.controller[key].tick()
        })
    }
}