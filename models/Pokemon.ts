export interface IPokemonProps {
    name: string;
}

export class Pokemon implements IPokemonProps {
    name: string;

    constructor(props: IPokemonProps) {
        this.name = props.name;
    }
}