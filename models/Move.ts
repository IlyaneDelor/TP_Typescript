export interface IMoveProps {
    name: string;
    power:number;
    accuracy: number;
 
}

export class Move implements IMoveProps {
    name: string;
    power: number;
    accuracy:number;
 

    constructor(props: IMoveProps) {
        this.name = props.name;
        this.power = props.power;
        this.accuracy=props.accuracy;
       
    }
}
