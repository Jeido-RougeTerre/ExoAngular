export class Attack {
    nom : string;
    desc : string;
    dmg : number;
    
    constructor(nom : string, desc : string, dmg : number) {
        this.nom = nom;
        this.desc = desc;
        this.dmg = dmg;
    }
}