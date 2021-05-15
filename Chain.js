class Chain{
    constructor(object1,object2){
        var options = {
            bodyA:object1,
            bodyB:object2,
            length:20,
            stiffness:0.01
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }

    display(){

    var bodyAposition = this.chain.bodyA.position
    var bodyBposition = this.chain.bodyB.position
    strokeWeight(3)
    line(bodyAposition.x,bodyAposition.y,bodyBposition.x,bodyBposition.y)

    }
}