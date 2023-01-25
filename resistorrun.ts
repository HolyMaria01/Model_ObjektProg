abstract class AbstractResistor {
    abstract getResistance(): number;
    getCurrent(u: number): number{
        return u/this.getResistance();
    }
}

class Switch extends AbstractResistor {
    on: boolean = false;
    setOn(state: boolean){
        this.on=state;
    }
    getResistance(): number {
        return (this.on ? 0 : 1000000000);
    }
    getCurrent(u: number): number{
        if(u>0){
            if(this.on){
                throw new Error("Short circuit");
            }
        }
        return super.getCurrent(u);
    }
}

function printResistance(r: AbstractResistor){
    console.log(r.getResistance());
}

let r1: Switch = new Switch();
r1.setOn(true);
printResistance(r1);
r1.setOn(false);
printResistance(r1);
console.log(r1.getCurrent(5));
r1.setOn(true);
console.log(r1.getCurrent(5));