class Resistor {
    r: number = 0;
    allowedPower: number = 0;
    constructor(r: number, ap: number) {
        this.r = r;
        this.allowedPower = ap;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
}

let r1 = new Resistor(220, 0.2);
let r2 = new Resistor(110, 0.1);
let r3 = new Resistor(1017, 5);

let resistors: Resistor[] = []
resistors = [r1, r2, r3]

function controlResistorAllowed(Resistros: Resistor[], u:number): Resistor[]{
    let allowedResistors: Resistor[] = []
    resistors.forEach(resistors) => {
        if(resistors.getPower(u) <= resistors.allowedPower){
            allowedResistros.push(resistor)
        }
    })
    return allowedResistros
}

if(r1.getPower(5) <= r1.allowedPower){
    console.log(r1.getPower(5));
}