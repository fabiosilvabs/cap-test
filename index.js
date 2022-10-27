class Clock{
    constructor(increment, decrement){
        this.increment = increment
        this.decrement = decrement
    }
    
    tick() {
        console.log({
            increment: ++this.increment,
            decrement: --this.decrement
        })
    }
           
}
const clock = new Clock (0, 10)
for (let i = 0; i < 10; i++) {
    clock.tick()
}
console.log("It reached its limit")



